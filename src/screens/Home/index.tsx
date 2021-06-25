import React, { useState, useEffect } from 'react'

import SurveyAdapter from 'adapters/survey'
import LazyLoader from 'components/LazyLoader'
import Survey from 'screens/Home/survey'

const Home = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    SurveyAdapter.fetchSurveyList().then(function (response) {
      console.log(response)
      setIsLoading(false)
    })
  })

  return <React.Fragment>{isLoading ? <LazyLoader /> : <Survey />}</React.Fragment>
}

export default Home
