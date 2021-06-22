import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const LazyLoader = (): JSX.Element => {
  const themeColor = '#313236'
  const highlightColor = '#49494D'

  return (
    <div className="container-lazy-loader">
      <SkeletonTheme color={themeColor} highlightColor={highlightColor}>
        <div className="lazy-loader-header">
          <span className="lazy-loader-header__web-icon">
            <Skeleton />
          </span>
          <span className="lazy-loader-header__user-image">
            <Skeleton />
          </span>
        </div>

        <div className="lazy-loader-body">
          <span className="lazy-loader-body__date">
            <Skeleton />
          </span>
          <span className="lazy-loader-body__day">
            <Skeleton />
          </span>
          <span className="lazy-loader-body__image">
            <Skeleton />
          </span>

          <div className="lazy-loader-footer">
            <div className="lazy-loader-footer__survey-info-container">
              <span className="lazy-loader-footer__title">
                <Skeleton />
              </span>
              <span className="lazy-loader-footer__subtitle">
                <Skeleton />
              </span>
            </div>
            <span className="lazy-loader-footer__button">
              <Skeleton />
            </span>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  )
}

export default LazyLoader
