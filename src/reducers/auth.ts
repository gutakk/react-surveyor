/* eslint-disable  @typescript-eslint/no-explicit-any */
type ActionType = {
  type: string
  payload: any
}

const AuthReducer = (state: Record<string, unknown>, action: ActionType): Record<string, unknown> => {
  switch (action.type) {
    case 'AUTH': {
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
