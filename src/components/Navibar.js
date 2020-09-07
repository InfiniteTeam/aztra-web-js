import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default class Navibar extends Component {
  render() {
    return (
      <>
        <div style={{ paddingTop: 65.94 }}>
          <Navbar bg="white" expand="sm" fixed="top" className="nav-item shadow rounded no-drag">
            <Navbar.Brand href="/">
              InfiniteTeam
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">홈</Nav.Link>
                <NavDropdown title="디스코드 봇" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/bots/Azalea">
                    Azalea
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}