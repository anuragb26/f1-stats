import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import routes from './Routes'

const app = () => (
  <Layout>
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch>
  </Layout>
)

export default app
