import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from 'contexts/auth'

type RouteAuthentication = {
  component: () => JSX.Element
  path: string
  exact?: boolean
}

const PrivateRoute = ({ ...props }: RouteAuthentication): JSX.Element => {
  const { state } = useContext(AuthContext)
  if (state.isAuthenticated) {
    return <Route {...props} />
  }
  return <Redirect to="/sign-in" />
}

const PublicRoute = ({ ...props }: RouteAuthentication): JSX.Element => {
  const { state } = useContext(AuthContext)
  if (!state.isAuthenticated) {
    return <Route {...props} />
  }
  return <Redirect to="/" />
}

export { PrivateRoute, PublicRoute }
