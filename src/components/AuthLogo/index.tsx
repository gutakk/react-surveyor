import React from 'react'

import logoWhite from 'assets/images/logo-white.png'

type AuthLogoProps = {
  label: string
}

const AuthLogo = ({ label }: AuthLogoProps): JSX.Element => {
  return (
    <div className="auth-logo">
      <img className="auth-logo__image" src={logoWhite} alt="Nimble" />
      <p className="auth-logo__label">{label}</p>
    </div>
  )
}

export default AuthLogo
