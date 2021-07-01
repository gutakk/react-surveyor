import React from 'react'

import sunglassesEmo from 'assets/images/sunglasses-emo.png'

const BlankSurvey = (): JSX.Element => {
  return (
    <div className="blank-survey" data-test-id="blankSurvey">
      <img className="blank-survey__emo" src={sunglassesEmo} alt="Sunglasses" />
      <p className="blank-survey__message">You’ve completed all the survey.</p>
      <p className="blank-survey__message">Take a moment.</p>
    </div>
  )
}

export default BlankSurvey
