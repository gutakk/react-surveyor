import React from 'react'

import logoWhite from 'assets/images/logo-white.png'

type AuthHeaderProps = {
  label: string
}

const AuthHeader = ({ label }: AuthHeaderProps): JSX.Element => {
  return (
    <div className="auth-header">
      <img className="auth-header__image" src={logoWhite} alt="Nimble" />
      <p className="auth-header__label">{label}</p>
    </div>
  )
}

export default AuthHeader
