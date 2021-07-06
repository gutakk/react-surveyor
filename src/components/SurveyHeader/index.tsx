import React from 'react'

import logoWhite from 'assets/images/logo-white.png'
import userImage from 'assets/images/user-image.png'

type SurveyHeaderProps = {
  onUserImageClick: () => void
}

const SurveyHeader = ({ onUserImageClick }: SurveyHeaderProps): JSX.Element => {
  return (
    <div className="survey-header" data-test-id="surveyHeader">
      <a href="/">
        <img className="survey-header__logo" src={logoWhite} alt="Nimble" data-test-id="surveyHeaderLogo" />
      </a>
      <img
        className="survey-header__user-image"
        src={userImage}
        alt="User"
        data-test-id="surveyHeaderUserImage"
        onClick={onUserImageClick}
        onKeyDown={onUserImageClick}
        role="presentation"
      />
    </div>
  )
}

export default SurveyHeader
