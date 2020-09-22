import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

export default class Auth extends Component {
  ProcessAuth = async () => {
    var code = new URLSearchParams(this.props.location.search).get('code')
    localStorage.setItem('token', code)
  }

  componentDidMount() {
    this.ProcessAuth()
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