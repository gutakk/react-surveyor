import React, { createContext, Dispatch, useReducer, useEffect } from 'react'

import * as Constants from 'constants/auth'
import AuthReducer from 'reducers/auth'

type AuthProvider = {
  children: JSX.Element
}

export type AuthState = {
  isAuthenticated: boolean
}

const initialState = {
  isAuthenticated: false
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
const AuthContext = createContext<{
  state: AuthState
  dispatch: Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
})

const AuthProvider = ({ children }: AuthProvider): JSX.Element => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  useEffect(() => {
    const refreshToken = localStorage.getItem('refresh_token')
    if (!state.isAuthenticated && refreshToken) {
      dispatch({ type: Constants.REFRESH })
    }
  })

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

export { AuthProvider, AuthContext }
