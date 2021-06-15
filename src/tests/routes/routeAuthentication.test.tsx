import React from 'react'
import { Router } from 'react-router-dom'

import { render } from '@testing-library/react'
import { createBrowserHistory } from 'history'

import { AuthContext, AuthProvider } from 'contexts/auth'
import { PrivateRoute, PublicRoute } from 'routes/routeAuthentication'
import Home from 'screens/Home'
import SignIn from 'screens/SignIn'

describe('routeAuthentication', () => {
  describe('Given authorized user', () => {
    it('Does not redirect when visit to private route', () => {
      const history = createBrowserHistory()
      const state = { isAuthenticated: true }
      const dispatch = () => null

      history.push('/')
      render(
        <Router history={history}>
          <AuthContext.Provider value={{ state, dispatch }}>
            <PrivateRoute path="/" exact component={Home} />
          </AuthContext.Provider>
        </Router>
      )

      expect(history.location.pathname).toBe('/')
    })

    it('Redirects to home page when visit to public route', () => {
      const history = createBrowserHistory()
      const state = { isAuthenticated: true }
      const dispatch = () => null

      history.push('/sign-in')
      render(
        <Router history={history}>
          <AuthContext.Provider value={{ state, dispatch }}>
            <PublicRoute path="/sign-in" exact component={SignIn} />
          </AuthContext.Provider>
        </Router>
      )

      expect(history.location.pathname).toBe('/')
    })
  })

  describe('Given unauthorized user', () => {
    it('Redirects to sign in page when visit to private route', () => {
      const history = createBrowserHistory()

      history.push('/')
      render(
        <Router history={history}>
          <AuthProvider>
            <PrivateRoute path="/" exact component={Home} />
          </AuthProvider>
        </Router>
      )

      expect(history.location.pathname).toBe('/sign-in')
    })

    it('Does not redirect when visit to public route', () => {
      const history = createBrowserHistory()

      history.push('/sign-in')
      render(
        <Router history={history}>
          <AuthProvider>
            <PublicRoute path="/sign-in" exact component={SignIn} />
          </AuthProvider>
        </Router>
      )

      expect(history.location.pathname).toBe('/sign-in')
    })
  })
})
