import React from 'react'

import { render, RenderResult } from '@testing-library/react'

import backIcon from 'assets/images/icons/back.svg'
import BackButton from 'components/BackButton'

describe('Given BackButton component is mounted', () => {
  let element: RenderResult
  beforeEach(() => {
    element = render(<BackButton />)
  })

  it('renders the button', () => {
    expect(element.getByTestId('backButton')).toBeInTheDocument()
  })

  it('renders back icon', () => {
    const backImage = element.getByAltText('back')
    
    expect(backImage).toBeInTheDocument()
    expect(backImage).toHaveAttribute('src', backIcon)
  })
})
