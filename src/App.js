import React, { Component } from 'react';
import { Navibar, Footer } from './components'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Home, Auth, NotFound, Redirecting } from './pages'
import oauth from './datas/oauth.json'
import General from './routes/General'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" render={() => <Redirecting to={oauth.discord_oauth2} />} />
          <Route component={General} />
        </Switch>
      </BrowserRouter>
    )
  }
}
