import axios, { AxiosResponse } from 'axios'

class AuthAdapter {
  static signIn = (email: string, password: string): Promise<AxiosResponse> => {
    const headers = {
      'Content-Type': 'application/json'
    }
    // prettier-ignore
    return axios.post(
      `${process.env.REACT_APP_NIMBLE_SURVEY_BASE_URL}/api/v1/oauth/token`,
      {
        'grant_type': 'password',
        'email': email,
        'password': password,
        'client_id': process.env.REACT_APP_CLIENT_ID,
        'client_secret': process.env.REACT_APP_CLIENT_SECRET
      },
      {
        headers: headers
      }
    )
  }
}

export default AuthAdapter
