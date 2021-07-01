import React from 'react'

import { render } from '@testing-library/react'

import { SurveyBackgroundContext } from 'contexts/surveyBackground'
import Survey from 'screens/Home/survey'

describe('given survey page is mounted', () => {
  describe('given valid survey list', () => {
    it('renders survey header', () => {
      const surveyList = [
        {
          node: {
            id: '1',
            title: 'title-1',
            description: 'description-1',
            coverImageUrl: 'image-1'
          }
        }
      ]
      const { getByTestId } = render(<Survey surveyList={surveyList} />)
      const surveyHeader = getByTestId('surveyHeader')

      expect(surveyHeader).toBeInTheDocument()
    })

    it('renders survey time', () => {
      const surveyList = [
        {
          node: {
            id: '1',
            title: 'title-1',
            description: 'description-1',
            coverImageUrl: 'image-1'
          }
        }
      ]
      const { getByTestId } = render(<Survey surveyList={surveyList} />)
      const surveyTime = getByTestId('surveyTime')

      expect(surveyTime).toBeInTheDocument()
    })

    it('renders surveyList', () => {
      const surveyList = [
        {
          node: {
            id: '1',
            title: 'title-1',
            description: 'description-1',
            coverImageUrl: 'image-1'
          }
        }
      ]
      const { getByTestId } = render(<Survey surveyList={surveyList} />)
      const surveyListPage = getByTestId('surveyList')

      expect(surveyListPage).toBeInTheDocument()
    })

    it('renders correct survey background', () => {
      const coverImageUrl = 'image-1'
      const surveyList = [
        {
          node: {
            id: '1',
            title: 'title-1',
            description: 'description-1',
            coverImageUrl: coverImageUrl
          }
        }
      ]
      const state = { currentBackground: coverImageUrl }
      const dispatch = () => null

      const { getByTestId } = render(
        <SurveyBackgroundContext.Provider value={{ state, dispatch }}>
          <Survey surveyList={surveyList} />
        </SurveyBackgroundContext.Provider>
      )
      const surveyPage = getByTestId('survey')

      expect(surveyPage).toHaveStyle('background-image: url(image-1)')
    })
  })

  describe('given empty survey list', () => {
    it('renders survey header', () => {
      const { getByTestId } = render(<Survey surveyList={[]} />)
      const surveyHeader = getByTestId('surveyHeader')

      expect(surveyHeader).toBeInTheDocument()
    })

    it('renders survey time', () => {
      const { getByTestId } = render(<Survey surveyList={[]} />)
      const surveyTime = getByTestId('surveyTime')

      expect(surveyTime).toBeInTheDocument()
    })

    it('renders blankSurvey', () => {
      const { getByTestId } = render(<Survey surveyList={[]} />)
      const blankSurvey = getByTestId('blankSurvey')

      expect(blankSurvey).toBeInTheDocument()
    })

    it('does NOT render survey background', () => {
      const state = { currentBackground: '' }
      const dispatch = () => null

      const { getByTestId } = render(
        <SurveyBackgroundContext.Provider value={{ state, dispatch }}>
          <Survey surveyList={[]} />
        </SurveyBackgroundContext.Provider>
      )
      const surveyPage = getByTestId('survey')

      expect(surveyPage).not.toHaveStyle('background-image: url(image-1)')
    })
  })
})
