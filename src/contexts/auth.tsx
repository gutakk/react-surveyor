import React, { createContext, Dispatch, useReducer } from 'react'

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

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

export { AuthProvider, AuthContext }
