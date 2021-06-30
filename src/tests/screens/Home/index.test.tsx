import React from 'react'

import { MockedProvider } from '@apollo/client/testing'
import { render, waitFor } from '@testing-library/react'

import Home from 'screens/Home'
import { GET_SURVEY_LIST } from 'screens/Home'

describe('given Home page is mounted', () => {
  describe('given valid survey list', () => {
    it('renders survey list page when fetched the survey list', async () => {
      const mocks = {
        request: {
          query: GET_SURVEY_LIST,
          variables: { isActive: true }
        },
        result: {
          data: {
            surveys: {
              edges: [
                {
                  node: {
                    id: '1',
                    title: 'title-1',
                    description: 'description-1',
                    coverImageUrl: 'image-1'
                  }
                }
              ]
            }
          }
        }
      }

      const { getByTestId } = render(
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <Home />
        </MockedProvider>
      )

      await waitFor(() => new Promise((res) => setTimeout(res, 0)))

      const surveyList = getByTestId('surveyList')
      expect(surveyList).toBeInTheDocument()
    })

    it('renders loading screen', () => {
      const mocks = {
        request: {
          query: GET_SURVEY_LIST,
          variables: { isActive: true }
        },
        result: {
          data: {
            surveys: {
              edges: [
                {
                  node: {
                    id: '1',
                    title: 'title-1',
                    description: 'description-1',
                    coverImageUrl: 'image-1'
                  }
                }
              ]
            }
          }
        }
      }

      const { getByTestId } = render(
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <Home />
        </MockedProvider>
      )

      const lazyLoader = getByTestId('lazyLoader')
      expect(lazyLoader).toBeInTheDocument()
    })
  })

  describe('given empty survey list', () => {
    it('renders blank survey', async () => {
      const mocks = {
        request: {
          query: GET_SURVEY_LIST,
          variables: { isActive: true }
        },
        result: {
          data: {
            surveys: {
              edges: []
            }
          }
        }
      }

      const { getByTestId } = render(
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <Home />
        </MockedProvider>
      )

      await waitFor(() => new Promise((res) => setTimeout(res, 0)))

      const blankSurvey = getByTestId('blankSurvey')
      expect(blankSurvey).toBeInTheDocument()
    })

    it('renders loading screen', () => {
      const mocks = {
        request: {
          query: GET_SURVEY_LIST,
          variables: { isActive: true }
        },
        result: {
          data: {
            surveys: {
              edges: []
            }
          }
        }
      }

      const { getByTestId } = render(
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <Home />
        </MockedProvider>
      )

      const lazyLoader = getByTestId('lazyLoader')
      expect(lazyLoader).toBeInTheDocument()
    })
  })

  describe('given unautorized response', () => {
    it('renders unauthorized content', async () => {
      const mocks = {
        request: {
          query: GET_SURVEY_LIST,
          variables: { isActive: true }
        },
        // This is the error return from Apollo when status code is 401
        error: new Error('Response not successful: Received status code 401')
      }

      const { getByText } = render(
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <Home />
        </MockedProvider>
      )

      await waitFor(() => new Promise((res) => setTimeout(res, 0)))

      const result = getByText('Unauthorized')
      expect(result).toBeInTheDocument()
    })
  })

  describe('given other network error response', () => {
    it('renders something went wrong content', async () => {
      const mocks = {
        request: {
          query: GET_SURVEY_LIST,
          variables: { isActive: true }
        },
        // This is the error return from Apollo when status code is 500
        error: new Error('Response not successful: Received status code 500')
      }

      const { getByText } = render(
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <Home />
        </MockedProvider>
      )

      await waitFor(() => new Promise((res) => setTimeout(res, 0)))

      const result = getByText('Something went wrong')
      expect(result).toBeInTheDocument()
    })
  })

  describe('given graphql error response', () => {
    it('renders something went wrong content', async () => {
      const mocks = {
        request: {
          query: GET_SURVEY_LIST,
          variables: { isActive: true }
        },
        errors: []
      }

      const { getByText } = render(
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <Home />
        </MockedProvider>
      )

      await waitFor(() => new Promise((res) => setTimeout(res, 0)))

      const result = getByText('Something went wrong')
      expect(result).toBeInTheDocument()
    })
  })
})
