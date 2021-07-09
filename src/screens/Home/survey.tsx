import React, { useContext } from 'react'

import SurveyHeader from 'components/SurveyHeader'
import SurveyTime from 'components/SurveyTime'
import { SurveyBackgroundContext } from 'contexts/surveyBackground'
import SurveyList, { SurveyData } from 'screens/Home/surveyList'

type SurveyProps = {
  surveyList: Array<SurveyData>
}

const Survey = ({ surveyList }: SurveyProps): JSX.Element => {
  const surveyBackgroundContext = useContext(SurveyBackgroundContext)

  return (
    <div
      className="survey"
      data-test-id="survey"
      style={{ backgroundImage: `url(${surveyBackgroundContext.state.currentBackground})` }}
    >
      <SurveyHeader />
      <div className="container-survey-content">
        <SurveyTime />
        <SurveyList surveyList={surveyList} />
      </div>
    </div>
  )
}

export default Survey
