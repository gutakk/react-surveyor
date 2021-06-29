import React from 'react'

export type SurveyData = {
  node: {
    description: string
    id: string
    isActive: boolean
    title: string
  }
}

type SurveyListProps = {
  surveyList: Array<SurveyData>
}

const SurveyList = ({ surveyList }: SurveyListProps): JSX.Element => {
  console.log(surveyList[0])
  return (
    <div className="survey-list" data-test-id="surveyList">
      <p>hello from survey list</p>
    </div>
  )
}

export default SurveyList
