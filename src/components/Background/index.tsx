import React from 'react'

type BackgroundProps = {
  backgroundImage: string
  children: JSX.Element
}

const Background = ({ backgroundImage, children }: BackgroundProps): JSX.Element => {
  return (
    <div className="page-container">
      <div className="page-container__background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="page-container__overlay">{children}</div>
      </div>
    </div>
  )
}

export default Background
