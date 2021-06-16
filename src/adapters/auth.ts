import { AxiosResponse } from 'axios'

import requestManager from 'lib/requestManager'

class AuthAdapter {
  static signIn = (email: string, password: string): Promise<AxiosResponse> => {
    /* eslint-disable camelcase */
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        grant_type: 'password',
        email: email,
        password: password,
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET
      }
    }

    return requestManager('POST', `${process.env.REACT_APP_NIMBLE_SURVEY_BASE_URL}/api/v1/oauth/token`, requestOptions)
  }

  static forgotPassword = (email: string): Promise<AxiosResponse> => {
    /* eslint-disable camelcase */
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        user: {
          email: email
        },
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET
      }
    }

    return requestManager('POST', `${process.env.REACT_APP_NIMBLE_SURVEY_BASE_URL}/api/v1/passwords`, requestOptions)
  }
}

export default AuthAdapter
