import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const LazyLoader = (): JSX.Element => {
  const themeColor = '#313236'
  const highlightColor = '#49494D'

  return (
    <div className="lazy-loader" data-test-id="lazyLoader">
      <SkeletonTheme color={themeColor} highlightColor={highlightColor}>
        <div className="lazy-loader__header">
          <span className="lazy-loader__web-icon" data-test-id="webIconLazyLoader">
            <Skeleton />
          </span>
          <span className="lazy-loader__user-image" data-test-id="userImageLazyLoader">
            <Skeleton />
          </span>
        </div>

        <div className="lazy-loader__body">
          <span className="lazy-loader__date" data-test-id="dateLazyLoader">
            <Skeleton />
          </span>
          <span className="lazy-loader__day" data-test-id="dayLazyLoader">
            <Skeleton />
          </span>
          <span className="lazy-loader__survey-image" data-test-id="surveyImageLazyLoader">
            <Skeleton />
          </span>

          <div className="lazy-loader__footer">
            <div className="lazy-loader__survey-info-container">
              <span className="lazy-loader__survey-title" data-test-id="surveyTitleLazyLoader">
                <Skeleton />
              </span>
              <span className="lazy-loader__survey-subtitle" data-test-id="surveySubtitleLazyLoader">
                <Skeleton />
              </span>
            </div>
            <span className="lazy-loader__button" data-test-id="buttonLazyLoader">
              <Skeleton />
            </span>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  )
}

export default LazyLoader
