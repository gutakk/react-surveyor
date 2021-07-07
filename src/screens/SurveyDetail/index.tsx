import React from 'react'
import { useParams } from 'react-router-dom'

import { FetchSurveyDetail } from 'adapters/survey'
import BackButton from 'components/BackButton'
import Background from 'components/Background'
import LazyLoader from 'components/LazyLoader'

type SurveyDetailParams = {
  surveyID: string
}

const SurveyDetail = (): JSX.Element => {
  const { surveyID } = useParams<SurveyDetailParams>()

  const { data, loading, error } = FetchSurveyDetail(surveyID)
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
    <Background backgroundImage={data.survey.coverImageUrl} pageClassName="survey-detail" dataTestID="surveyDetail">
      <BackButton />
      <div className="survey-detail__content">
        <img src={data.survey.coverImageUrl} alt={data.survey.title} />
        <p>{data.survey.title}</p>
        <p>{data.survey.description}</p>
        <button>Start Survey</button>
      </div>
    </Background>
  )
}

export default SurveyDetail
