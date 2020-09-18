import React, { Component } from 'react';

export default class Auth extends Component {
    componentDidMount() {
        var code = new URLSearchParams(this.props.location.search).get('code')
        localStorage.setItem('token', code)
    }

    render() {
        return null
    }
}