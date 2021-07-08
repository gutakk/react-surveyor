import { AxiosResponse } from 'axios'

import AuthAdapter from 'adapters/auth'

const refreshAccessToken = async () => {
  await AuthAdapter.refreshAccessToken()
    .then(function (response: AxiosResponse) {
      if (response.status === 200) {
        /* eslint-disable camelcase */
        const { access_token, refresh_token, token_type } = response.data.data.attributes
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)
        localStorage.setItem('token_type', token_type)
      }
    })
    .catch(function () {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('token_type')
      localStorage.removeItem('lastVisitedRoute')
    })

  window.location.href = localStorage.getItem('lastVisitedRoute') || '/'
}

export default refreshAccessToken
