import React from 'react'

import { render } from '@testing-library/react'

import SurveyList from 'screens/Home/surveyList'

describe('given surveyList page is mounted', () => {
  describe('given valid survey list', () => {
    it('renders two surveys', () => {
      const surveyList = [
        {
          node: {
            id: '1',
            title: 'title-1',
            description: 'description-1',
            coverImageUrl: 'image-1'
          }
        },
        {
          node: {
            id: '2',
            title: 'title-2',
            description: 'description-2',
            coverImageUrl: 'image-2'
          }
        }
      ]

      const { container } = render(<SurveyList surveyList={surveyList} />)
      const surveys = container.getElementsByClassName('survey-list-data')

      expect(surveys.length).toBe(2)
    })

    it('renders correct survey title', () => {
      const surveyList = [
        {
          node: {
            id: '1',
            title: 'title-1',
            description: 'description-1',
            coverImageUrl: 'image-1'
          }
        },
        {
          node: {
            id: '2',
            title: 'title-2',
            description: 'description-2',
            coverImageUrl: 'image-2'
          }
        }
      ]

      const { getByText } = render(<SurveyList surveyList={surveyList} />)
      const survey1 = getByText('title-1')
      const survey2 = getByText('title-2')

      expect(survey1).toBeInTheDocument()
      expect(survey2).toBeInTheDocument()
    })

    it('renders correct survey description', () => {
      const surveyList = [
        {
          node: {
            id: '1',
            title: 'title-1',
            description: 'description-1',
            coverImageUrl: 'image-1'
          }
        },
        {
          node: {
            id: '2',
            title: 'title-2',
            description: 'description-2',
            coverImageUrl: 'image-2'
          }
        }
      ]

      const { getByText } = render(<SurveyList surveyList={surveyList} />)
      const survey1 = getByText('description-1')
      const survey2 = getByText('description-2')

      expect(survey1).toBeInTheDocument()
      expect(survey2).toBeInTheDocument()
    })

    it('renders correct survey image', () => {
      const surveyList = [
        {
          node: {
            id: '1',
            title: 'title-1',
            description: 'description-1',
            coverImageUrl: 'image-1'
          }
        },
        {
          node: {
            id: '2',
            title: 'title-2',
            description: 'description-2',
            coverImageUrl: 'image-2'
          }
        }
      ]

      const { getByAltText } = render(<SurveyList surveyList={surveyList} />)
      const survey1 = getByAltText('title-1')
      const survey2 = getByAltText('title-2')

      expect(survey1).toBeInTheDocument()
      expect(survey2).toBeInTheDocument()
    })
  })

  describe('given empty survey list', () => {
    it('renders blank survey', () => {
      const { getByTestId } = render(<SurveyList surveyList={[]} />)
      const blankSurvey = getByTestId('blankSurvey')

      expect(blankSurvey).toBeInTheDocument()
    })
  })
})
