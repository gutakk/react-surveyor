import React from 'react'

import SurveyHeader from 'components/SurveyHeader'
import BlankSurvey from 'screens/Home/BlankSurvey'

const Survey = (): JSX.Element => {
  return (
    <div className="survey">
      <SurveyHeader />
      <BlankSurvey />
    </div>
  )
}

export default Survey
