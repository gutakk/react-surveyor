import React from 'react'
import { useParams } from 'react-router-dom'

const SurveyDetail = (): JSX.Element => {
  const x = useParams()
  console.log(x)

  return <div>Hello from survey detail</div>
}

export default SurveyDetail
