import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'

import { withTitle } from '../utils/index'
import history from './history'
import ROUTES from './routes/index'

export const Router = () => (
  <ConnectedRouter history={history}>
    <Switch>
      {Object.values(ROUTES).map(({ title, Component, url }) => (
        <Route
          exact
          key={url}
          component={withTitle(title)(Component)}
          path={url}
        />
      ))}
    </Switch>
  </ConnectedRouter>
)
