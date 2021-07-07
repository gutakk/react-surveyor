import React, { useContext } from 'react'

import Background from 'components/Background'
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
    <Background
      backgroundImage={surveyBackgroundContext.state.currentBackground}
      pageClassName="survey"
      dataTestID="survey"
    >
      <SurveyHeader />
      <div className="container-survey-content">
        <SurveyTime />
        <SurveyList surveyList={surveyList} />
      </div>
    </Background>
  )
}

export default Survey
