import React from 'react'
import { Switch } from 'react-router-dom'

import { PrivateRoute, PublicRoute } from 'routes/routeAuthentication'
import ForgotPassword from 'screens/ForgotPassword'
import Home from 'screens/Home'
import SignIn from 'screens/SignIn'

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={Home} />
      <PublicRoute path="/sign-in" exact component={SignIn} />
      <PublicRoute path="/forgot-password" exact component={ForgotPassword} />
    </Switch>
  )
}

export default Routes
