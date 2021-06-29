import React from 'react'

import { render } from '@testing-library/react'

import backIcon from 'assets/images/icons/back.svg'
import BackButton from 'components/BackButton'

describe('Given BackButton component is mounted', () => {
  it('renders the button', () => {
    const { getByTestId } = render(<BackButton />)

    expect(getByTestId('backButton')).toBeInTheDocument()
  })

  it('renders back icon', () => {
    const { getByAltText } = render(<BackButton />)
    const backImage = getByAltText('back')

    expect(backImage).toBeInTheDocument()
    expect(backImage).toHaveAttribute('src', backIcon)
  })
})
