import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const LazyLoader = (): JSX.Element => {
  const themeColor = '#313236'
  const highlightColor = '#49494D'

  return (
    <SkeletonTheme color={themeColor} highlightColor={highlightColor}>
      <div className="lazy-loader-header">
        <span className="lazy-loader-header__web-icon">
          <Skeleton />
        </span>
        <span className="lazy-loader-header__user-image">
          <Skeleton />
        </span>
      </div>

      <div className="lazy-loader-detail">
        <span className="lazy-loader-detail__date">
          <Skeleton />
        </span>
        <span className="lazy-loader-detail__day">
          <Skeleton />
        </span>
        <span className="lazy-loader-detail__image">
          <Skeleton />
        </span>
        <span className="lazy-loader-detail__title">
          <Skeleton />
        </span>
        <span className="lazy-loader-detail__subtitle">
          <Skeleton />
        </span>
        <span className="lazy-loader-detail__button">
          <Skeleton />
        </span>
      </div>
    </SkeletonTheme>
  )
}

export default LazyLoader
