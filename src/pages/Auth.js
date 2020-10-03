import React from 'react'
import axios from 'axios'

export default class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      done: false
    }
  }
  ProcessAuth = async () => {
    var code = new URLSearchParams(this.props.location.search).get('code')
    localStorage.setItem('authcode', code)
    try {
      let res = await axios.get('/oauth2/token', {
        params: {
          code: code
        }
      })
      localStorage.setItem('token', res.data.access_token)
      this.setState({ done: true })
    }
    catch (e) {
      console.error(e)
    }
  }

  async componentDidMount() {
    await this.ProcessAuth()
    window.location.assign('/')
  }

  render() {
    return null
  }
}