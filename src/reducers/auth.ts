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
  payload: AuthTypePayload
}

const AuthReducer = (state: AuthState, action: ActionType): AuthState => {
  switch (action.type) {
    case Constants.AUTH: {
      /* eslint-disable camelcase */
      const { access_token, refresh_token, token_type } = action.payload.attributes
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('refresh_token', refresh_token)
      localStorage.setItem('token_type', token_type)

      return { ...state }
    }
    default: {
      return state
    }
  }
}

export default AuthReducer
