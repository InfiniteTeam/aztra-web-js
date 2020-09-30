import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Sidebar } from './'

export default class BasicDashboard extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={4} sm={4}>
            <Sidebar />
          </Col>
          <Col md={8} sm={8} style={{
            color: 'white'
          }}>
            {this.props.children}
          </Col>
        </Row>
      </Container>
    )
  }
}