import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Auth extends Component {
  componentDidMount() {
    var code = new URLSearchParams(this.props.location.search).get('code')
    localStorage.setItem('token', code)
  }

  render() {
    return (
      <div>
        로그인 중
        <Redirect to="/" />
      </div>
    )
  }
}