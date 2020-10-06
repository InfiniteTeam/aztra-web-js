import React, { Component, createRef } from 'react';
import { Container, Row, Col, Collapse, Button } from 'react-bootstrap';
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
      fetchDone: false,
      sidebarOpen: false,
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    }

    this.sidebarHeaderRef = createRef()
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
    window.addEventListener('resize', this.updateWindowState)

    const token = localStorage.getItem('token')
    if (token) {
      this.getGuild(token)
    }
    else {
      window.location.assign('/login')
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowState)
  }

  updateWindowState = () => {
    this.setState({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    })
  }

  render() {
    const guild = this.state.guild
    const isXXSsize = this.sidebarHeaderRef.current?.clientHeight ? this.state.winWidth < 576 : true
    console.log(this.sidebarHeaderRef.current?.clientHeight)

    return (
      <Container fluid>
        <Row>
          {/* 대시보드 사이드바 */}
          <Col xl={2} lg={3} md={3} sm={4} className="Dashboardroute-sidebar">

            <Container className="pl-0 pr-0 pb-1" id="sidebar-header">
              {/* 사이드바 헤더 */}
              <Row>
                <Col xs={isXXSsize ? 10 : 12} md={12} ref={this.sidebarHeaderRef}>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      paddingLeft: 2,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      alt=""
                      src={`https://cdn.discordapp.com/icons/${guild?.id}/${guild?.icon}.png`}
                      style={{ maxHeight: 40, marginRight: 15, borderRadius: '70%' }}
                    />
                    {guild?.name}
                  </div>
                </Col>
                <Col xs={isXXSsize ? 2 : 0} className="text-center my-auto pl-1 d-sm-none d-md-none d-lg-none d-xl-none">
                  <Button
                    size="sm"
                    variant="secondary"
                    aria-controls="sidebar-collapse"
                    aria-expanded={this.state.sidebarOpen}
                    onClick={() => this.setState({ sidebarOpen: !this.state.sidebarOpen })}
                    style={{
                      fontSize: '9pt'
                    }}
                  >
                    메뉴
                  </Button>
                </Col>
              </Row>
              {/* 사이드바 본문 */}
              <Row>
                <Col>
                  {
                    isXXSsize
                      ? (
                        <Collapse in={this.state.sidebarOpen} timeout={0}>
                          <div id="sidebar-collapse" className="Dashboardroute-sidebar-body">
                            <Sidebar guild={guild} />
                          </div>
                        </Collapse>
                      )
                      : (
                        <div className="Dashboardroute-sidebar-body" style={{
                          height: `calc(100vh - ${this.sidebarHeaderRef.current?.clientHeight}px - 90px)`
                        }}>
                          <Sidebar guild={guild} />
                        </div>
                      )
                  }
                </Col>
              </Row>
            </Container>
          </Col>

          {/* 대시보드 본문 */}
          <Col xl={10} lg={9} md={9} sm={8} className="Dashboardroute-body">
            {
              this.state.fetchDone
                ? <Switch>
                  <Route exact path="/dashboard/:serverid(\d+)" render={
                    () => <Dashboard.Main guild={guild} />}
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