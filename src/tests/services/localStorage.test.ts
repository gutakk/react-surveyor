import LocalStorage from 'services/localStorage'

describe('LocalStorage service', () => {
  afterEach(() => {
    localStorage.clear()
  })

  describe('get', () => {
    describe('given valid key pair', () => {
      it('returns correct value', () => {
        localStorage.setItem('test-key', 'test-value')

        const result = LocalStorage.get('test-key')

        expect(result).toEqual('test-value')
      })
    })

    describe('given invalid key pair', () => {
      it('returns null', () => {
        localStorage.setItem('test-key', 'test-value')

        const result = LocalStorage.get('invalid-key')

        expect(result).toBeNull()
      })
    })
  })

  describe('set', () => {
    it('sets correct value', () => {
      LocalStorage.set('test-key', 'test-value')

      const result = localStorage.getItem('test-key')

      expect(result).toEqual('test-value')
    })
  })

  describe('setToken', () => {
    it('sets correct access token', () => {
      LocalStorage.setToken('test-access', 'test-refresh', 'test-token-type')

      const result = localStorage.getItem('access_token')

      expect(result).toEqual('test-access')
    })

    it('sets correct refresh token', () => {
      LocalStorage.setToken('test-access', 'test-refresh', 'test-token-type')

      const result = localStorage.getItem('refresh_token')

      expect(result).toEqual('test-refresh')
    })

    it('sets correct token type', () => {
      LocalStorage.setToken('test-access', 'test-refresh', 'test-token-type')

      const result = localStorage.getItem('token_type')

      expect(result).toEqual('test-token-type')
    })
  })

  describe('clear', () => {
    it('removes app related value from local storage', () => {
      LocalStorage.setToken('test-access', 'test-refresh', 'test-token-type')
      LocalStorage.set('lastVisitedRoute', 'test-route')

      expect(localStorage).toHaveLength(4)

      LocalStorage.clear()

      expect(localStorage).toHaveLength(0)
    })
  })
})
