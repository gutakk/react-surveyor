import React from 'react'

type BackgroundProps = {
  backgroundImage: string
  children: JSX.Element
}

const Background = ({ backgroundImage, children }: BackgroundProps): JSX.Element => {
  return (
    <div className="background">
      <div className="background__image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="background__overlay">{children}</div>
      </div>
    </div>
  )
}

export default Background
