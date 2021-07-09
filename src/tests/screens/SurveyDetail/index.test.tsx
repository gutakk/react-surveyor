import React from 'react'
import { Route, MemoryRouter } from 'react-router-dom'

import { MockedProvider } from '@apollo/client/testing'
import { render, waitFor } from '@testing-library/react'

import SurveyDetail from 'screens/SurveyDetail'
import { graphQLErrorType } from 'tests/fixtures/graphqlResponse'
import { surveyDetailErrorResponse, surveyDetailSuccessResponse } from 'tests/fixtures/surveyDetailResponse'

describe('given SurveyDetail page is mounted', () => {
  describe('given valid survey detail', () => {
    it('renders survey detail page when fetched the survey detail', async () => {
      const surveyID = '1'
      const mocks = { ...surveyDetailSuccessResponse(surveyID) }

      const { getByTestId } = render(
        <MemoryRouter initialEntries={[`survey/${surveyID}`]}>
          <Route path="survey/:surveyID">
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
      const mocks = { ...surveyDetailErrorResponse(graphQLErrorType.unauthorized, surveyID) }

      const { getByText } = render(
        <MemoryRouter initialEntries={[`survey/${surveyID}`]}>
          <Route path="survey/:surveyID">
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
      const mocks = { ...surveyDetailErrorResponse(graphQLErrorType.networkError, surveyID) }

      const { getByText } = render(
        <MemoryRouter initialEntries={[`survey/${surveyID}`]}>
          <Route path="survey/:surveyID">
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
      const mocks = { ...surveyDetailErrorResponse(graphQLErrorType.graphqlError, surveyID) }

      const { getByText } = render(
        <MemoryRouter initialEntries={[`survey/${surveyID}`]}>
          <Route path="survey/:surveyID">
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
