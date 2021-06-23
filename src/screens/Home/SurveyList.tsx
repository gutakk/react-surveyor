import React from 'react'

import SurveyHeader from 'components/SurveyHeader'
import SurveyTime from 'components/SurveyTime'
import BlankSurvey from 'screens/Home/BlankSurvey'

const SurveyList = (): JSX.Element => {
  return (
    <div className="survey-list" data-test-id="surveyList">
      <SurveyHeader />
      <div className="container-survey-content">
        <SurveyTime />
        <BlankSurvey />
      </div>
    </div>
  )
}

export default SurveyList
