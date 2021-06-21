import React from 'react'

import { render } from '@testing-library/react'

import AuthInputField from 'components/AuthInputField'

describe('Given AuthInputField component is mounted', () => {
  it('renders correct label', () => {
    const { getByLabelText } = render(
      <AuthInputField
        type="text"
        name="someName"
        id="someID"
        className="someClass"
        dataTestID="someDataTestID"
        label="someLabel"
      />
    )
    
    expect(getByLabelText('someLabel')).toBeInTheDocument()
  })

  it('renders correct input field', () => {
    const { getByTestId } = render(
      <AuthInputField
        type="text"
        name="someName"
        id="someID"
        className="someClass"
        dataTestID="someDataTestID"
        label="someLabel"
      />
    )
    const inputField = getByTestId('someDataTestID')

    expect(inputField).toBeInTheDocument()
    expect(inputField).toHaveAttribute('type', 'text')
  })
})
