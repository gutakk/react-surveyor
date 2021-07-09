import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { render } from '@testing-library/react'

import { SurveyBackgroundContext } from 'contexts/surveyBackground'
import Survey from 'screens/Home/survey'
import surveyListResponse from 'tests/fixtures/surveyListResponse.json'

describe('given survey page is mounted', () => {
  describe('given valid survey list', () => {
    it('renders survey header', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <Survey surveyList={surveyListResponse} />
        </BrowserRouter>
      )
      const surveyHeader = getByTestId('surveyHeader')

      expect(surveyHeader).toBeInTheDocument()
    })

    it('renders survey time', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <Survey surveyList={surveyListResponse} />
        </BrowserRouter>
      )
      const surveyTime = getByTestId('surveyTime')

      expect(surveyTime).toBeInTheDocument()
    })

    it('renders surveyList', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <Survey surveyList={surveyListResponse} />
        </BrowserRouter>
      )
      const surveyListPage = getByTestId('surveyList')

      expect(surveyListPage).toBeInTheDocument()
    })

    it('renders correct survey background', () => {
      const coverImageUrl = 'image-1'
      const state = { currentBackground: coverImageUrl }
      const dispatch = () => null

      const { getByTestId } = render(
        <BrowserRouter>
          <SurveyBackgroundContext.Provider value={{ state, dispatch }}>
            <Survey surveyList={surveyListResponse} />
          </SurveyBackgroundContext.Provider>
        </BrowserRouter>
      )
      const surveyPage = getByTestId('backgroundImage')

      expect(surveyPage).toHaveStyle('background-image: url(image-1)')
    })
  })

  describe('given empty survey list', () => {
    it('renders survey header', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <Survey surveyList={[]} />
        </BrowserRouter>
      )
      const surveyHeader = getByTestId('surveyHeader')

      expect(surveyHeader).toBeInTheDocument()
    })

    it('renders survey time', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <Survey surveyList={[]} />
        </BrowserRouter>
      )
      const surveyTime = getByTestId('surveyTime')

      expect(surveyTime).toBeInTheDocument()
    })

    it('renders blankSurvey', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <Survey surveyList={[]} />
        </BrowserRouter>
      )
      const blankSurvey = getByTestId('blankSurvey')

      expect(blankSurvey).toBeInTheDocument()
    })

    it('does NOT render survey background', () => {
      const state = { currentBackground: '' }
      const dispatch = () => null

      const { getByTestId } = render(
        <BrowserRouter>
          <SurveyBackgroundContext.Provider value={{ state, dispatch }}>
            <Survey surveyList={[]} />
          </SurveyBackgroundContext.Provider>
        </BrowserRouter>
      )
      const surveyPage = getByTestId('backgroundImage')

      expect(surveyPage).not.toHaveStyle('background-image: url(image-1)')
    })
  })
})
