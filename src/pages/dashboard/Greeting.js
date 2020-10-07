import React, { Component } from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap'

export default class Greeting extends Component {
  render() {
    const guild = this.props.guild

    return (
      <div style={{
        fontFamily: 'NanumBarunGothic'
      }}>
        <Row className="dashboard-section">
          <h3>환영 메시지 설정</h3>
        </Row>
        <Row>
          <Col className="col-auto">
            <Form>
              <Form.Group controlId="incomingTitle">
                <Form.Label>반기는 메시지 제목</Form.Label>
                <Form.Control type="text" placeholder="예) {user}님, 안녕하세요!" />

                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="incomingDesc">
                <Form.Label>반기는 메시지 내용</Form.Label>
                <Form.Control type="text" placeholder="예) {guild}에 오신 것을 환영합니다." />
              </Form.Group>

              <Form.Group controlId="outgoingTitle">
                <Form.Label>보내는 메시지 제목</Form.Label>
                <Form.Control type="text" placeholder="예) {user}님, 안녕히가세요" />
              </Form.Group>

              <Form.Group controlId="outgoingDesc">
                <Form.Label>보내는 메시지 내용</Form.Label>
                <Form.Control type="text" placeholder="예) {user}님이 나갔습니다." />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}