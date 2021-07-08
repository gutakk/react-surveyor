import { AxiosResponse } from 'axios'

import AuthAdapter from 'adapters/auth'
import LocalStorage from 'services/localStorage'

const refreshAccessToken = async () => {
  await AuthAdapter.refreshAccessToken()
    .then(function (response: AxiosResponse) {
      if (response.status === 200) {
        /* eslint-disable camelcase */
        const { access_token, refresh_token, token_type } = response.data.data.attributes
        LocalStorage.setToken(access_token, refresh_token, token_type)
      }
    })
    .catch(function () {
      LocalStorage.clear()
    })

  window.location.href = LocalStorage.get('lastVisitedRoute') || '/'
}

export default refreshAccessToken
