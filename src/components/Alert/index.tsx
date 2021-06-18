import React from 'react'

import errorIcon from 'assets/images/icons/error.svg'

type AlertProps = {
  title: string
  detail: string
}

const Alert = ({ title, detail }: AlertProps): JSX.Element => {
  return (
    <div className="alert" data-testid="alert">
      <img src={errorIcon} alt="error" />
      <div className="alert__message">
        <p className="alert__message-title">{title}</p>
        <p className="alert__message-detail">{detail}</p>
      </div>
    </div>
  )
}

export default Alert
