import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';

export default class Main extends Component {
  render() {
    const guild = this.props.guild
    return (
      <>
        <Nav 
          className="col-md-12 d-none d-md-block"
          style={{
            paddingRight: 0
          }}
        >
          <Nav.Item style={{fontSize: '1.05rem', fontWeight: 600, paddingBottom: 10, paddingLeft: 2}}>
            <img 
              alt="" 
              src={`https://cdn.discordapp.com/icons/${guild?.id}/${guild?.icon}.png`} 
              style={{ maxHeight: 42, marginRight: 15, borderRadius: '70%' }} 
            />
            {guild?.name}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>메인</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>환영 메시지</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>봇 세부 권한 관리</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    )
  }
}