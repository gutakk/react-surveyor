import React from 'react'

import { GetSurveyList } from 'adapters/survey'
import LazyLoader from 'components/LazyLoader'
import { SurveyBackgroundProvider } from 'contexts/surveyBackground'
import Survey from 'screens/Home/survey'

const Home = (): JSX.Element => {
  const { data, loading, error } = GetSurveyList()

  if (loading) return <LazyLoader />
  if (error?.networkError?.message.includes('401')) {
    // TODO: Redirect to home page and clear local storage (this still not working because of REFRESH action bug)
    return <p>Unauthorized</p>
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
