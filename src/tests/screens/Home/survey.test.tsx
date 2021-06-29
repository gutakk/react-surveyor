import React from 'react'

import { render } from '@testing-library/react'

import Survey from 'screens/Home/survey'

describe('given survey page is mounted', () => {
  describe('given valid survey list', () => {
    it('renders survey header', () => {
      const surveyList = [{
        node: {
          id: '1',
          title: 'title-1',
          description: 'description-1',
          coverImageUrl: 'image-1'
        }
      }]
      const { getByTestId } = render(<Survey surveyList={surveyList} />)
      const surveyHeader = getByTestId('surveyHeader')
    
      expect(surveyHeader).toBeInTheDocument()
    })
    
    it('renders survey time', () => {
      const surveyList = [{
        node: {
          id: '1',
          title: 'title-1',
          description: 'description-1',
          coverImageUrl: 'image-1'
        }
      }]
      const { getByTestId } = render(<Survey surveyList={surveyList} />)
      const surveyTime = getByTestId('surveyTime')
    
      expect(surveyTime).toBeInTheDocument()
    })
    
    it('renders surveyList', () => {
      const surveyList = [{
        node: {
          id: '1',
          title: 'title-1',
          description: 'description-1',
          coverImageUrl: 'image-1'
        }
      }]
      const { getByTestId } = render(<Survey surveyList={surveyList} />)
      const surveyListPage = getByTestId('surveyList')
    
      expect(surveyListPage).toBeInTheDocument()
    })
  })

  describe('given empry survey list', () => {
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
  })
})
