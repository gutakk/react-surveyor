/* eslint-disable */

import axios, { AxiosResponse } from 'axios'

import refreshAccessToken from 'services/refreshToken'
import oauthTokenResponse from 'tests/fixtures/oauthTokenResponse.json'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('refreshToken service', () => {
  const mockResponse = jest.fn()
  Object.defineProperty(window, 'location', {
    value: {
      href: mockResponse
    }
  })

  afterEach(() => {
    localStorage.clear()
  })

  describe('given valid refresh token response', () => {
    it('stores data to local storage', async () => {
      const mockedResponse: AxiosResponse = {
        data: {
          data: {
            attributes: {
              id: 1,
              type: 'token',
              attributes: {
                 access_token: 'test-access-token',
                 token_type: 'Bearer',
                 expires_in: 99,
                 refresh_token: 'test-refresh-token',
                 created_at: 999
              }
            }
          }
        },
        status: 200,
        statusText: 'Ok',
        headers: {},
        config: {}
      }
      mockedAxios.request.mockResolvedValue(mockedResponse)
  
      await refreshAccessToken()
  
      expect(Object.keys(localStorage)).toEqual(['access_token', 'refresh_token', 'token_type'])
    })

    it('redirects to home page', async () => {
      const mockedResponse: AxiosResponse = {
        ...oauthTokenResponse,
        status: 200,
        statusText: 'Ok',
        headers: {},
        config: {}
      }
      mockedAxios.request.mockResolvedValue(mockedResponse)
  
      await refreshAccessToken()
  
      expect(window.location.href).toBe('/')
    })

    describe ('given last visited route', () => {
      it('redirects to last visited path', async () => {
        localStorage.setItem('lastVisitedRoute', '/test-path')
        const mockedResponse: AxiosResponse = {
          ...oauthTokenResponse,
          status: 200,
          statusText: 'Ok',
          headers: {},
          config: {}
        }
        mockedAxios.request.mockResolvedValue(mockedResponse)
    
        await refreshAccessToken()
    
        expect(window.location.href).toBe('/test-path')
      })
    })
  })

  describe('given invalid refresh token response', () => {
    it('does NOT store data to local storage', async () => {
      const mockedResponse: AxiosResponse = {
        data: null,
        status: 400,
        statusText: 'Bad Request',
        headers: {},
        config: {}
      }
      mockedAxios.request.mockRejectedValue(mockedResponse)
  
      await refreshAccessToken()
  
      expect(Object.keys(localStorage)).toEqual([])
    })

    it('redirects to sign in page', async () => {
      const mockedResponse: AxiosResponse = {
        data: null,
        status: 400,
        statusText: 'Bad Request',
        headers: {},
        config: {}
      }
      mockedAxios.request.mockRejectedValue(mockedResponse)
  
      await refreshAccessToken()
  
      expect(window.location.href).toBe('/sign-in')
    })
  })
})
