import React from 'react'

import SurveyHeader from 'components/SurveyHeader'
import SurveyTime from 'components/SurveyTime'
import SurveyList, { SurveyData } from 'screens/Home/surveyList'

type SurveyProps = {
  surveyList: Array<SurveyData>
}

const Survey = ({ surveyList }: SurveyProps): JSX.Element => {
  return (
    <div className="survey" data-test-id="survey">
      <SurveyHeader />
      <div className="container-survey-content">
        <SurveyTime />
        <SurveyList surveyList={surveyList} />
      </div>
    </div>
  )
}

export default Survey
