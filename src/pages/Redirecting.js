import React, { Component } from 'react'

export default class Redirecting extends Component {
	render() {
		window.location.assign(this.props.to)
		return null
	}
}