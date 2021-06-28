import React, { useState, useEffect } from 'react'

import SurveyAdapter from 'adapters/survey'
import LazyLoader from 'components/LazyLoader'
import Survey from 'screens/Home/survey'

const Home = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true)
  const [surveyList, setSurveyList] = useState([])

  useEffect(() => {
    SurveyAdapter.fetchSurveyList()
      .then((response) => {
        if (Object.keys(response.data).length > 0) {
          setSurveyList(response.data.surveys.edges)
        }
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }, [])

  return <React.Fragment>{isLoading ? <LazyLoader /> : <Survey surveyList={surveyList} />}</React.Fragment>
}

export default Home
