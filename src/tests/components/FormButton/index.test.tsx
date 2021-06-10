import React from 'react'
import { render } from '@testing-library/react'

import FormButton from 'components/FormButton'

describe('Given FormButton component is mounted', () => {
  const label = 'Test Label'
  const { getByText } = render(<FormButton label={ label } />)
  const formButton = getByText(label)

  it('renders button with correct label', () => {
    expect(formButton).toBeInTheDocument
  })

  it('renders button with type submit', () => {
    expect(formButton).toHaveAttribute('type', 'submit')
  })
})
