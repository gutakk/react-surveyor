import React from 'react'

import SurveyHeader from 'components/SurveyHeader'
import SurveyTime from 'components/SurveyTime'
import BlankSurvey from 'screens/Home/blankSurvey'
import SurveyList from 'screens/Home/surveyList'

type SurveyProps = {
  surveyList: any
}

const Survey = ({ surveyList }: SurveyProps): JSX.Element => {
  return (
    <div className="survey" data-test-id="survey">
      <SurveyHeader />
      <div className="container-survey-content">
        <SurveyTime />
        {surveyList.length > 0 ? <SurveyList /> : <BlankSurvey />}
      </div>
    </div>
  )
}

export default Survey
