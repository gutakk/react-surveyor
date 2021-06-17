import React from 'react'

import { render, RenderResult } from '@testing-library/react'

import AuthInputField from 'components/AuthInputField'

describe('Given AuthInputField component is mounted', () => {
  let element: RenderResult
  beforeEach(() => {
    element = render(
      <AuthInputField
        type="text"
        name="someName"
        id="someID"
        className="someClass"
        dataTestID="someDataTestID"
        label="someLabel"
      />
    )
  })

  it('renders correct label', () => {
    expect(element.getByLabelText('someLabel')).toBeInTheDocument()
  })

  it('renders correct input field', () => {
    const inputField = element.getByTestId('someDataTestID')
    expect(inputField).toBeInTheDocument()
    expect(inputField).toHaveAttribute('type', 'text')
  })
})
