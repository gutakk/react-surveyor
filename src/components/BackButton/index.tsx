import React from 'react'
import { useHistory } from 'react-router-dom'

import backIcon from 'assets/images/icons/back.svg'

const BackButton = (): JSX.Element => {
  const history = useHistory()
  const goBackFunc = () => history.goBack()

  return (
    <button onClick={goBackFunc} data-testid="backButton">
      <img src={backIcon} alt="back" />
    </button>
  )
}

export default BackButton
