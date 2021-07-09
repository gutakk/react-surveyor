class LocalStorage {
  static get = (key: string): string | null => {
    return localStorage.getItem(key)
  }

  static set = (key: string, value: string): void => {
    localStorage.setItem(key, value)
  }

  static setToken = (accessToken: string, refreshToken: string, tokenType: string): void => {
    localStorage.setItem('access_token', accessToken)
    localStorage.setItem('refresh_token', refreshToken)
    localStorage.setItem('token_type', tokenType)
  }

  static clear = (): void => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('token_type')
    localStorage.removeItem('lastVisitedRoute')
  }
}

export default LocalStorage
