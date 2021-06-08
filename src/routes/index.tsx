import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from 'screens/SignIn'

const Routes = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route path="/">{SignIn}</Route>
      </Switch>
    </div>
  )
}

export default Routes
