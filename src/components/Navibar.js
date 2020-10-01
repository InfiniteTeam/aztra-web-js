import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import axios from 'axios'
import oauth2 from '../datas/oauth'
import urljoin from 'url-join'

export default class Navibar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      loginDone: false
    }
  }

  getUserInfo = async (token) => {
    try {
      let res = await axios.get(urljoin(oauth2.api_endpoint, '/users/@me'), {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.setState({ user: res.data })
    }
    catch (e) {
      this.setState({ user: {} })
    }
    finally {
      this.setState({ loginDone: true })
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    !token || this.getUserInfo(token)
    console.log(this.state.user)
  }
  render() {
    const user = this.state.user
    return (
      <>
        <div style={{ paddingTop: 65.94 }}>
          <Navbar bg="dark" expand="sm" fixed="top" className="nav-item no-drag navbar-dark">
            <Container fluid="sm">
              <Navbar.Brand href="/" style={{
                fontWeight: 500
              }}>
                Aztra
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">홈</Nav.Link>
                  <NavDropdown title="기능들" id="basic-nav-dropdown" className="dropdown-menu-dark">
                    <NavDropdown.Item href="/bots/Azalea" className="dropdown-item-dark">
                      환영 메시지
                      </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  {
                    user
                      ?
                      <>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}>
                          <img alt={user.username} src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} style={{
                            maxHeight: 30,
                            borderRadius: '70%',
                            overflow: 'hidden'
                          }} />
                        </div>
                        <NavDropdown title={`${user.username}#${user.discriminator}`} id="basic-nav-dropdown" className="dropdown-menu-dark">
                          <NavDropdown.Item href="/logout" className="dropdown-item-dark">
                            로그아웃
                          </NavDropdown.Item>
                        </NavDropdown>
                      </>
                      : <Nav.Link href="/login">로그인</Nav.Link>
                  }
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}
