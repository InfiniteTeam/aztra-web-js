import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home, Auth, NotFound, Redirecting, Logout } from './pages'
import oauth from './datas/oauth'
import { Navibar, Footer, BaiscDashboard } from './components'
import * as Dashboard from './pages/dashboard'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" render={() => <Redirecting to={oauth.discord_oauth2} />} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/auth" component={Auth} />
          <Route>
            <Navibar timestamp={new Date().toString()} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/servers" component={Dashboard.Servers} />
              <Route path="/dashboard">
                <BaiscDashboard>
                  <Switch>
                    <Route exact path="/dashboard" component={Dashboard.Main} />
                    <Route component={NotFound} />
                  </Switch>
                </BaiscDashboard>
              </Route>
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
