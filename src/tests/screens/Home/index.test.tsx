import React from 'react'

import { MockedProvider } from '@apollo/client/testing'
import { render, waitFor } from '@testing-library/react'

import SurveyAdapter from 'adapters/survey'
import Home from 'screens/Home'
import surveyListResponse, { surveyListResponseType } from 'tests/fixtures/surveyListResponse'

describe('given Home page is mounted', () => {
  describe('given valid survey list', () => {
    it('renders survey list page when fetched the survey list', async () => {
      const mocks = { ...surveyListResponse(surveyListResponseType.valid) }

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
      const mocks = { ...surveyListResponse(surveyListResponseType.valid) }

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
      const mocks = { ...surveyListResponse(surveyListResponseType.empty) }

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
      const mocks = { ...surveyListResponse(surveyListResponseType.empty) }

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
      const mocks = { ...surveyListResponse(surveyListResponseType.unauthorized) }

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
      const mocks = { ...surveyListResponse(surveyListResponseType.networkError) }

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
      const mocks = { ...surveyListResponse(surveyListResponseType.graphqlError) }

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
