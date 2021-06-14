import React from 'react'

import errorIcon from 'assets/images/icons/error.svg'

type AlertProps = {
  title: string
  detail: string
}

const Alert = ({ title, detail }: AlertProps): JSX.Element => {
  return (
    <div className="alert">
      <img src={errorIcon} alt="error" />
      <div className="alert-message">
        <p className="alert-message__title">{title}</p>
        <p className="alert-message__detail">{detail}</p>
      </div>
    </div>
  )
}

export default Alert
