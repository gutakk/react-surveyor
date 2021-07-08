import * as Constants from 'constants/auth'
import { AuthState } from 'contexts/auth'
import LocalStorage from 'services/localStorage'

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

      LocalStorage.setToken(data.access_token, data.refresh_token, data.token_type)

      return { ...state, isAuthenticated: true }
    }
    case Constants.LOGOUT: {
      LocalStorage.clear()

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
