import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Redirecting } from './pages'
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
