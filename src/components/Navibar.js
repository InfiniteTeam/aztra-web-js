import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

export default class Navibar extends Component {
  render() {
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
              </Navbar.Collapse>
            </Container>

          </Navbar>
        </div>
      </>
    );
  }
}