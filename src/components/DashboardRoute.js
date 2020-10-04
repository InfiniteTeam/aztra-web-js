import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import * as Dashboard from '../pages/dashboard'
import { Sidebar } from '.'
import { NotFound } from '../pages'
import axios from 'axios'
import urljoin from 'url-join'
import oauth2 from '../datas/oauth'
import { Permissions } from 'discord.js'

export default class DashboardRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guild: null,
      fetchDone: false
    }
  }

  getGuild = async token => {
    await axios.get(urljoin(oauth2.api_endpoint, '/users/@me/guilds'), {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        let guild = res.data
          .filter(one => {
            let perms = new Permissions(one.permissions)
            return perms.has(Permissions.FLAGS.ADMINISTRATOR)
          })
          .find(one => one.id === this.props.match.params.serverid)
        this.setState({ guild: guild })
      })
      .catch(e => {
        this.setState({ guild: null })
        console.log(e)
      })
      .finally(() => {
        this.setState({ fetchDone: true })
      })
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      this.getGuild(token)
    }
    else {
      window.location.assign('/login')
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xl={2} lg={3} md={3} sm={3} className="Dashboardroute-sidebar">
            <div className="Dashboardroute-sidebar-body">
              <Sidebar guild={this.state.guild}/>
            </div>
          </Col>
          <Col xl={10} lg={9} md={9} sm={9} className="Dashboardroute-body">
            {
              this.state.fetchDone 
                ? <Switch>
                    <Route exact path="/dashboard/:serverid(\d+)" render={
                      () => <Dashboard.Main guild={this.state.guild} />}
                    />
                    <Route component={NotFound} />
                  </Switch>
                : null
            }
          </Col>
        </Row>
      </Container>
    )
  }
}