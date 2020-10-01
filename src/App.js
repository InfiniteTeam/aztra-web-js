import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home, Auth, NotFound, Redirecting } from './pages'
import oauth from './datas/oauth'
import { Navibar, Footer, BaiscDashboard } from './components'
import * as Dashboard from './pages/dashboard'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" render={() => <Redirecting to={oauth.discord_oauth2} />} />
          <Route>
            <Navibar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/auth" component={Auth} />
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
