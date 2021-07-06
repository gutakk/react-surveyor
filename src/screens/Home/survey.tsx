import React, { useContext, useState } from 'react'

import Background from 'components/Background'
import Sidebar from 'components/Sidebar'
import SurveyHeader from 'components/SurveyHeader'
import SurveyTime from 'components/SurveyTime'
import { SurveyBackgroundContext } from 'contexts/surveyBackground'
import SurveyList, { SurveyData } from 'screens/Home/surveyList'

type SurveyProps = {
  surveyList: Array<SurveyData>
}

const Survey = ({ surveyList }: SurveyProps): JSX.Element => {
  const surveyBackgroundContext = useContext(SurveyBackgroundContext)
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const openSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar)
    console.log(isOpenSidebar)
  }

  return (
    <Background
      backgroundImage={surveyBackgroundContext.state.currentBackground}
      pageClassName="survey"
      dataTestID="survey"
    >
      <Sidebar isOpen={isOpenSidebar} />
      <SurveyHeader onUserImageClick={openSidebar} />
      <div className="container-survey-content">
        <SurveyTime />
        <SurveyList surveyList={surveyList} />
      </div>
    </Background>
  )
}

export default Survey
