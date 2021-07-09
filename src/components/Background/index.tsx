import React from 'react'

type BackgroundProps = {
  backgroundImage: string
  pageClassName: string
  dataTestID: string
  isContentCenter?: boolean
  children: JSX.Element | JSX.Element[]
}

const Background = ({
  backgroundImage,
  pageClassName,
  isContentCenter,
  dataTestID,
  children
}: BackgroundProps): JSX.Element => {
  return (
    <div className={`${pageClassName} background`} data-test-id={dataTestID}>
      <div
        className="background__image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        data-test-id="backgroundImage"
      >
        <div className={`background__overlay background__overlay${isContentCenter ? '--center' : ''}`}>{children}</div>
      </div>
    </div>
  )
}

export default Background
