import React from 'react'
import { Route, MemoryRouter } from 'react-router-dom'

import { MockedProvider } from '@apollo/client/testing'
import { render, waitFor } from '@testing-library/react'

import SurveyAdapter from 'adapters/survey'
import SurveyDetail from 'screens/SurveyDetail'

describe('given SurveyDetail page is mounted', () => {
  describe('given valid survey detail', () => {
    it('renders survey detail page when fetched the survey detail', async () => {
      const surveyID = '1'
      const mocks = {
        request: {
          query: SurveyAdapter.getSurveyDetailQuery(),
          variables: { surveyID: surveyID }
        },
        result: {
          data: {
            survey: {
              id: '1',
              title: 'Scarlett Bangkok',
              description: 'We\'d love ot hear from you!',
              coverImageUrl: 'https://dhdbhh0jsld0o.cloudfront.net/m/1ea51560991bcb7d00d0_'
            }
          }
        }
      }

      const { getByTestId } = render(
        <MemoryRouter initialEntries={[`survey/${surveyID}`]}>
          <Route path='survey/:surveyID'>
            <MockedProvider mocks={[mocks]} addTypename={false}>
              <SurveyDetail />
            </MockedProvider>
          </Route>
        </MemoryRouter>
      )

      await waitFor(() => new Promise((res) => setTimeout(res, 0)))

      const surveyDetail = getByTestId('surveyDetail')
      expect(surveyDetail).toBeInTheDocument()
    })
  })

  describe('given unauthorized response', () => {
    it('renders unauthorized content', async () => {
      const surveyID = '1'
      const mocks = {
        request: {
          query: SurveyAdapter.getSurveyDetailQuery(),
          variables: { surveyID: surveyID }
        },
        // This is the error return from Apollo when status code is 401
        error: new Error('Response not successful: Received status code 401')
      }

      const { getByText } = render(
        <MemoryRouter initialEntries={[`survey/${surveyID}`]}>
          <Route path='survey/:surveyID'>
            <MockedProvider mocks={[mocks]} addTypename={false}>
              <SurveyDetail />
            </MockedProvider>
          </Route>
        </MemoryRouter>
      )

      await waitFor(() => new Promise((res) => setTimeout(res, 0)))

      const result = getByText('Unauthorized')
      expect(result).toBeInTheDocument()
    })
  })

  describe('given other network error response', () => {
    it('renders something went wrong content', async () => {
      const surveyID = '1'
      const mocks = {
        request: {
          query: SurveyAdapter.getSurveyDetailQuery(),
          variables: { surveyID: surveyID }
        },
        // This is the error return from Apollo when status code is 500
        error: new Error('Response not successful: Received status code 500')
      }

      const { getByText } = render(
        <MemoryRouter initialEntries={[`survey/${surveyID}`]}>
          <Route path='survey/:surveyID'>
            <MockedProvider mocks={[mocks]} addTypename={false}>
              <SurveyDetail />
            </MockedProvider>
          </Route>
        </MemoryRouter>
      )

      await waitFor(() => new Promise((res) => setTimeout(res, 0)))

      const result = getByText('Something went wrong')
      expect(result).toBeInTheDocument()
    })
  })

  describe('given graphql error response', () => {
    it('renders something went wrong content', async () => {
      const surveyID = '1'
      const mocks = {
        request: {
          query: SurveyAdapter.getSurveyDetailQuery(),
          variables: { surveyID: surveyID }
        },
        errors: []
      }

      const { getByText } = render(
        <MemoryRouter initialEntries={[`survey/${surveyID}`]}>
          <Route path='survey/:surveyID'>
            <MockedProvider mocks={[mocks]} addTypename={false}>
              <SurveyDetail />
            </MockedProvider>
          </Route>
        </MemoryRouter>
      )

      await waitFor(() => new Promise((res) => setTimeout(res, 0)))

      const result = getByText('Something went wrong')
      expect(result).toBeInTheDocument()
    })
  })
})
