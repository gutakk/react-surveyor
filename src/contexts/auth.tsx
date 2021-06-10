import React, { createContext, Dispatch, useReducer } from 'react'

import AuthReducer from 'reducers/auth'

type AuthProvider = {
  children: JSX.Element
}

const initialState = {}

/* eslint-disable  @typescript-eslint/no-explicit-any */
const AuthContext = createContext<{
  state: any
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
