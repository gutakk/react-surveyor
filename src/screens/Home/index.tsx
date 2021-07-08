import React from 'react'

import { FetchSurveyList } from 'adapters/survey'
import LazyLoader from 'components/LazyLoader'
import { SurveyBackgroundProvider } from 'contexts/surveyBackground'
import Survey from 'screens/Home/survey'

const Home = (): JSX.Element => {
  const { data, loading, error } = FetchSurveyList()

  if (loading) return <LazyLoader />
  if (error?.networkError?.message.includes('401')) {
    return <LazyLoader />
  }
  if (error) {
    // TODO: Create something went wrong screen
    return <p>Something went wrong</p>
  }

  return (
    <SurveyBackgroundProvider>
      <Survey surveyList={data.surveys.edges} />
    </SurveyBackgroundProvider>
  )
}

export default Home
