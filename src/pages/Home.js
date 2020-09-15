import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Container fluid="sm" className="ct Intro-ct">
            <div className="Main-intro">
              <p>
                <h1 className="no-drag text-white text-center">
                  미래를 바꿀 디스코드 관리봇, Aztra
                </h1>
              </p>
              <p>
                <h2 className="no-drag text-white text-center">
                  다채롭고 깔끔한 디스코드 서버를 만들 수 있도록 도와드리겠습니다.
                </h2>
              </p>

            </div>
          </Container>
        </Container>
      </>
    );
  }
}
