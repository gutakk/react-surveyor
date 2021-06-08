import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'screens/Home'
import SignIn from 'screens/SignIn'

const Routes = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {Home}
        </Route>
        <Route path="/sign-in">{SignIn}</Route>
      </Switch>
    </div>
  )
}

export default Routes
