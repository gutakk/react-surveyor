import React from 'react'

const SurveyTime = (): JSX.Element => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' }
  const today: string = new Date().toLocaleString('en-EN', options)

  return (
    <div className="survey-time">
      <p className="survey-time__date">{today}</p>
      <p className="survey-time__day">Today</p>
    </div>
  )
}

export default SurveyTime
