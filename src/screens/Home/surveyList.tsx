/* eslint-disable */
import React from 'react'
import Slider from 'react-slick'

import nextIcon from 'assets/images/icons/next.svg'

export type SurveyData = {
  node: {
    description: string
    id: string
    coverImageUrl: string
    title: string
  }
}

type SurveyListProps = {
  surveyList: Array<SurveyData>
}

const slickSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  speed: 500
}

const SurveyList = ({ surveyList }: SurveyListProps): JSX.Element => {
  return (
    <div className="survey-list" data-test-id="surveyList">
      <Slider {...slickSettings}>
        {surveyList.map((survey) => {
          return (
            <div key={survey.node.id} className="survey-list-data">
              <img src={survey.node.coverImageUrl} alt={survey.node.title} className="survey-list-data__image" />
              <div className="survey-list-data__footer">
                <div className="survey-list-data__info-container">
                  <p className="survey-list-data__title">{survey.node.title}</p>
                  <p className="survey-list-data__description">{survey.node.description}</p>
                </div>
                <div className="survey-list-data__next">
                  <img src={nextIcon} alt="Next" />
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default SurveyList
