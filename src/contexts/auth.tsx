import React, { createContext, Dispatch, useReducer } from 'react'

import AuthReducer from 'reducers/auth'

const initialState = {}

const AuthContext = createContext<{
  state: any
  dispatch: Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
})

const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

export { AuthProvider, AuthContext }
