import React, { Component } from 'react';
import { Navibar, Footer } from './components'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navibar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}
