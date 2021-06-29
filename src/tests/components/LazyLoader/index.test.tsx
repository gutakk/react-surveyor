import React from 'react'

import { render } from '@testing-library/react'

import LazyLoader from 'components/LazyLoader'

describe('given LazyLoader component is mounted', () => {
  it('renders web icon lazy loader', () => {
    const { getByTestId } = render(<LazyLoader />)
    const webIconLazyLoader = getByTestId('webIconLazyLoader')

    expect(webIconLazyLoader).toBeInTheDocument()
  })

  it('renders user image lazy loader', () => {
    const { getByTestId } = render(<LazyLoader />)
    const webIconLazyLoader = getByTestId('userImageLazyLoader')

    expect(webIconLazyLoader).toBeInTheDocument()
  })

  it('renders date lazy loader', () => {
    const { getByTestId } = render(<LazyLoader />)
    const webIconLazyLoader = getByTestId('dateLazyLoader')

    expect(webIconLazyLoader).toBeInTheDocument()
  })

  it('renders day lazy loader', () => {
    const { getByTestId } = render(<LazyLoader />)
    const webIconLazyLoader = getByTestId('dayLazyLoader')

    expect(webIconLazyLoader).toBeInTheDocument()
  })

  it('renders survey image lazy loader', () => {
    const { getByTestId } = render(<LazyLoader />)
    const webIconLazyLoader = getByTestId('surveyImageLazyLoader')

    expect(webIconLazyLoader).toBeInTheDocument()
  })

  it('renders survey title lazy loader', () => {
    const { getByTestId } = render(<LazyLoader />)
    const webIconLazyLoader = getByTestId('surveyTitleLazyLoader')

    expect(webIconLazyLoader).toBeInTheDocument()
  })

  it('renders survey subtitle lazy loader', () => {
    const { getByTestId } = render(<LazyLoader />)
    const webIconLazyLoader = getByTestId('surveySubtitleLazyLoader')

    expect(webIconLazyLoader).toBeInTheDocument()
  })

  it('renders button lazy loader', () => {
    const { getByTestId } = render(<LazyLoader />)
    const webIconLazyLoader = getByTestId('buttonLazyLoader')

    expect(webIconLazyLoader).toBeInTheDocument()
  })
})
