import React from 'react'
import { useHistory } from 'react-router-dom'

const BackButton = (): JSX.Element => {
  const history = useHistory()
  const goBackFunc = () => history.goBack()

  return <button onClick={goBackFunc}>Back</button>
}

export default BackButton
