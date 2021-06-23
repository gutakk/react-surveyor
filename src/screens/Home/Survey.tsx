import React from 'react'

import SurveyHeader from 'components/SurveyHeader'
import SurveyTime from 'components/SurveyTime'
import BlankSurvey from 'screens/Home/BlankSurvey'

const Survey = (): JSX.Element => {
  return (
    <div className="survey">
      <SurveyHeader />
      <div className="container-survey-content">
        <SurveyTime />
        <BlankSurvey />
      </div>
    </div>
  )
}

export default Survey
