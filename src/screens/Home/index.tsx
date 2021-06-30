import React, { useState, useEffect } from 'react'

import { FetchSurveyList } from 'adapters/survey'
import LazyLoader from 'components/LazyLoader'
import Survey from 'screens/Home/survey'

const Home = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true)
  const [surveyList, setSurveyList] = useState([])

  const { data, error } = FetchSurveyList()

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      setSurveyList(data.surveys.edges)
      setIsLoading(false)
    } else if (error) {
      setIsLoading(false)
    }
  }, [data])

  return <React.Fragment>{isLoading ? <LazyLoader /> : <Survey surveyList={surveyList} />}</React.Fragment>
}

export default Home
