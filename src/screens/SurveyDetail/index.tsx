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
    return <LazyLoader />
  }
  if (error) {
    // TODO: Create something went wrong screen
    return <p>Something went wrong</p>
  }

  return (
    <Background
      backgroundImage={data.survey.coverImageUrl}
      pageClassName="survey-detail"
      dataTestID="surveyDetail"
      isContentCenter={true}
    >
      <BackButton />
      <div className="survey-detail__content">
        <img className="survey-detail__image" src={data.survey.coverImageUrl} alt={data.survey.title} />
        <p className="survey-detail__title">{data.survey.title}</p>
        <p className="survey-detail__description">{data.survey.description}</p>
        <button className="survey-detail__start-survey">Start Survey</button>
      </div>
    </Background>
  )
}

export default SurveyDetail
