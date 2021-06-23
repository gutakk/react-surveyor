import React from 'react'

import logoWhite from 'assets/images/logo-white.png'

const SurveyHeader = (): JSX.Element => {
  return (
    <div className="survey-header">
      <div className="survey-header__logo" data-test-id="surveyHeaderLogo">
        <img src={logoWhite} alt="Nimble" />
      </div>
      <div className="survey-header__user-image" data-test-id="surveyHeaderUserImage">
        <img alt="User" />
      </div>
    </div>
  )
}

export default SurveyHeader
