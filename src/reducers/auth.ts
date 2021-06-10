const AuthReducer = (state: any, action: any) => {
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
