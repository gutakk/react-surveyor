import React from 'react'
import { useHistory } from 'react-router-dom'

import backIcon from 'assets/images/icons/back.svg'

const BackButton = (): JSX.Element => {
  const history = useHistory()
  const goBack = () => history.push('/')

  return (
    <button onClick={goBack} className="back-button" data-test-id="backButton">
      <img src={backIcon} alt="back" className="back-button__icon" />
    </button>
  )
}

export default BackButton
