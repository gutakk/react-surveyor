import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from 'contexts/auth'
import LocalStorage from 'services/localStorage'

type RouteAuthentication = {
  component: () => JSX.Element
  path: string
  exact?: boolean
}

const PrivateRoute = ({ ...props }: RouteAuthentication): JSX.Element => {
  const { state } = useContext(AuthContext)
  LocalStorage.set('lastVisitedRoute', window.location.pathname)

  if (state.isAuthenticated) {
    return <Route {...props} />
  }
  return <Redirect to="/sign-in" />
}

const PublicRoute = ({ ...props }: RouteAuthentication): JSX.Element => {
  const { state } = useContext(AuthContext)
  const lastVisitedRoute = LocalStorage.get('lastVisitedRoute') || '/'

  if (!state.isAuthenticated) {
    return <Route {...props} />
  }
  return <Redirect to={lastVisitedRoute} />
}

export { PrivateRoute, PublicRoute }
