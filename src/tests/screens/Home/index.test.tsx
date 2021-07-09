import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { MockedProvider } from '@apollo/client/testing'
import { render, waitFor } from '@testing-library/react'

import Home from 'screens/Home'
import homeResponse, { homeResponseType } from 'tests/fixtures/homeResponse'

describe('given Home page is mounted', () => {
  describe('given survey list being fetched', () => {
    it('renders loading screen', () => {
      const mocks = { ...homeResponse(homeResponseType.valid) }

      const { getByTestId } = render(
        <BrowserRouter>
          <MockedProvider mocks={[mocks]} addTypename={false}>
            <Home />
          </MockedProvider>
        </BrowserRouter>
      )

      const lazyLoader = getByTestId('lazyLoader')
      expect(lazyLoader).toBeInTheDocument()
    })
  })

  describe('given unautorized response', () => {
    it('renders unauthorized content', async () => {
      const mocks = { ...homeResponse(homeResponseType.unauthorized) }

      const { getByText } = render(
        <BrowserRouter>
          <MockedProvider mocks={[mocks]} addTypename={false}>
            <Home />
          </MockedProvider>
        </BrowserRouter>
      )

      await waitFor(() => new Promise((res) => setTimeout(res, 0)))

      const result = getByText('Unauthorized')
      expect(result).toBeInTheDocument()
    })
  })

  describe('given other network error response', () => {
    it('renders something went wrong content', async () => {
      const mocks = { ...homeResponse(homeResponseType.networkError) }

      const { getByText } = render(
        <BrowserRouter>
          <MockedProvider mocks={[mocks]} addTypename={false}>
            <Home />
          </MockedProvider>
        </BrowserRouter>
      )

      await waitFor(() => new Promise((res) => setTimeout(res, 0)))

      const result = getByText('Something went wrong')
      expect(result).toBeInTheDocument()
    })
  })

  describe('given graphql error response', () => {
    it('renders something went wrong content', async () => {
      const mocks = { ...homeResponse(homeResponseType.graphqlError) }

      const { getByText } = render(
        <BrowserRouter>
          <MockedProvider mocks={[mocks]} addTypename={false}>
            <Home />
          </MockedProvider>
        </BrowserRouter>
      )

      await waitFor(() => new Promise((res) => setTimeout(res, 0)))

      const result = getByText('Something went wrong')
      expect(result).toBeInTheDocument()
    })
  })
})
