import * as Constants from 'constants/auth'
import { AuthState } from 'contexts/auth'

/* eslint-disable camelcase */
type AuthTypePayload = {
  attributes: {
    access_token: string
    refresh_token: string
    token_type: string
  }
}

type ActionType = {
  type: string
  payload?: AuthTypePayload
}

const AuthReducer = (state: AuthState, action: ActionType): AuthState => {
  switch (action.type) {
    case Constants.AUTH: {
      const data = action?.payload?.attributes
      if (!data) {
        return state
      }
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('refresh_token', data.refresh_token)
      localStorage.setItem('token_type', data.token_type)

      return { ...state, isAuthenticated: true }
    }
    case Constants.LOGOUT: {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('token_type')
      localStorage.removeItem('lastVisitedRoute')

      return { ...state, isAuthenticated: false }
    }
    case Constants.REFRESH: {
      return { ...state, isAuthenticated: true }
    }
    default: {
      return state
    }
  }
}

export default AuthReducer
