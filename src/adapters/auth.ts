/* eslint-disable camelcase */

import { AxiosResponse } from 'axios'

import { postWithJsonBodyHeaders } from 'adapters/headers'
import requestManager from 'lib/requestManager'

class AuthAdapter {
  static DEFAULT_PAYLOAD = {
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET
  }

  static signIn = (email: string, password: string): Promise<AxiosResponse> => {
    const requestOptions = {
      headers: {
        ...postWithJsonBodyHeaders
      },
      data: {
        grant_type: 'password',
        email: email,
        password: password,
        ...AuthAdapter.DEFAULT_PAYLOAD
      }
    }

    return requestManager('POST', `${process.env.REACT_APP_NIMBLE_SURVEY_BASE_URL}/api/v1/oauth/token`, requestOptions)
  }

  static forgotPassword = (email: string): Promise<AxiosResponse> => {
    const requestOptions = {
      headers: {
        ...postWithJsonBodyHeaders
      },
      data: {
        user: {
          email: email
        },
        ...AuthAdapter.DEFAULT_PAYLOAD
      }
    }

    return requestManager('POST', `${process.env.REACT_APP_NIMBLE_SURVEY_BASE_URL}/api/v1/passwords`, requestOptions)
  }
}

export default AuthAdapter
