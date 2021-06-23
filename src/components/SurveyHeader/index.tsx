import React from 'react'

import logoWhite from 'assets/images/logo-white.png'
import userImage from 'assets/images/user-image.png'

const SurveyHeader = (): JSX.Element => {
  return (
    <div className="survey-header">
      <img className="survey-header__logo" src={logoWhite} alt="Nimble" data-test-id="surveyHeaderLogo" />
      <img className="survey-header__user-image" src={userImage} alt="User" data-test-id="surveyHeaderUserImage" />
    </div>
  )
}

export default SurveyHeader
