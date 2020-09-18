import React from 'react';
import { Navibar, Footer } from '../components'
import { Route, Switch } from 'react-router-dom';
import { Home, Auth, NotFound } from '../pages'

const General = ({ match }) => (
  <>
    <Navibar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </>
)

export default General