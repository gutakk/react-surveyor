import * as Constants from 'constants/auth'
import { AuthState } from 'contexts/auth'

/* eslint-disable  @typescript-eslint/no-explicit-any */
type ActionType = {
  type: string
  payload: any
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
