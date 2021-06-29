import React from 'react'

import { render } from '@testing-library/react'

import bellIcon from 'assets/images/icons/bell.svg'
import errorIcon from 'assets/images/icons/error.svg'
import Alert, { alertIcon } from 'components/Alert'

describe('given Alert component is mounted', () => {
  it('renders correct title', () => {
    const { getByText } = render(<Alert title="someTitle" detail="someDetail" icon={alertIcon.bell} />)
    const title = getByText('someTitle')

    expect(title).toBeInTheDocument()
  })

  it('renders correct detail', () => {
    const { getByText } = render(<Alert title="someTitle" detail="someDetail" icon={alertIcon.bell} />)
    const detail = getByText('someDetail')

    expect(detail).toBeInTheDocument()
  })

  describe('given bell icon', () => {
    it('renders bell icon', () => {
      const { getByTestId } = render(<Alert title="someTitle" detail="someDetail" icon={alertIcon.bell} />)
      const icon = getByTestId('alertIcon')

      expect(icon).toHaveAttribute('src', bellIcon)
    })
  })

  describe('given error icon', () => {
    it('renders error icon', () => {
      const { getByTestId } = render(<Alert title="someTitle" detail="someDetail" icon={alertIcon.error} />)
      const icon = getByTestId('alertIcon')

      expect(icon).toHaveAttribute('src', errorIcon)
    })
  })
})
