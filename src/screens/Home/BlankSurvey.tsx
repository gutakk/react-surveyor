import React from 'react'

import sunglassesEmo from 'assets/images/sunglasses-emo.png'

const BlankSurvey = (): JSX.Element => {
  return (
    <div className="blank-survey" data-test-id="blankSurvey">
      <div className="blank-survey-header">
        <p className="blank-survey-header__date">Monday, June 15</p>
        <p className="blank-survey-header__day">Today</p>
      </div>
      <div className="blank-survey-detail">
        <img className="blank-survey-detail__emo" src={sunglassesEmo} alt="Sunglasses" />
        <p className="blank-survey-detail__message">You’ve completed all the survey.</p>
        <p className="blank-survey-detail__message">Take a moment.</p>
      </div>
    </div>
  )
}

export default BlankSurvey
