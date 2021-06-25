import React from 'react'

import { gql, useQuery } from '@apollo/client'

import SurveyHeader from 'components/SurveyHeader'
import SurveyTime from 'components/SurveyTime'
import BlankSurvey from 'screens/Home/blankSurvey'
import SurveyList from 'screens/Home/surveyList'

const Survey = (): JSX.Element => {
  const GET_SURVEY_LIST = gql`
    query Surveys($isActive: Boolean!) {
      surveys @include(if: $isActive) {
        totalCount
        edges {
          node {
            isActive
            id
            title
            description
          }
        }
      }
    }
  `

  const result = useQuery(GET_SURVEY_LIST, {
    variables: { isActive: true }
  })
  console.log(result.data)

  return (
    <div className="survey" data-test-id="survey">
      <SurveyHeader />
      <div className="container-survey-content">
        <SurveyTime />
        <BlankSurvey />
        <SurveyList />
      </div>
    </div>
  )
}

export default Survey
