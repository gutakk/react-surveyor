import React from 'react'

import bellIcon from 'assets/images/icons/bell.svg'
import errorIcon from 'assets/images/icons/error.svg'

const alertIconMapper = {
  error: errorIcon,
  bell: bellIcon
}

export enum alertIcon {
  error = 'error',
  bell = 'bell'
}

type AlertProps = {
  title: string
  detail: string
  icon: alertIcon
}

const Alert = ({ title, detail, icon }: AlertProps): JSX.Element => {
  return (
    <div className="alert" data-test-id="alert">
      <img src={alertIconMapper[icon]} alt="error" data-test-id="alertIcon" />
      <div className="alert__message">
        <p className="alert__message-title">{title}</p>
        <p className="alert__message-detail">{detail}</p>
      </div>
    </div>
  )
}

export default Alert
