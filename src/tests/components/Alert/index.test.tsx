import React from 'react'

import { render } from '@testing-library/react'

import bellIcon from 'assets/images/icons/bell.svg'
import errorIcon from 'assets/images/icons/error.svg'
import Alert, { alertIcon } from 'components/Alert'

describe('given Alert component is mounted', () => {
  it('renders correct title', () => {
    const element = render(<Alert title="someTitle" detail="someDetail" icon={alertIcon.bell} />)
    const title = element.getByText('someTitle')

    expect(title).toBeInTheDocument()
  })

  it('renders correct detail', () => {
    const element = render(<Alert title="someTitle" detail="someDetail" icon={alertIcon.bell} />)
    const detail = element.getByText('someDetail')

    expect(detail).toBeInTheDocument()
  })

  describe('given bell icon', () => {
    it('renders bell icon', () => {
      const element = render(<Alert title="someTitle" detail="someDetail" icon={alertIcon.bell} />)
      const icon = element.getByTestId('alertIcon')

      expect(icon).toHaveAttribute('src', bellIcon)
    })
  })

  describe('given error icon', () => {
    it('renders error icon', () => {
      const element = render(<Alert title="someTitle" detail="someDetail" icon={alertIcon.error} />)
      const icon = element.getByTestId('alertIcon')

      expect(icon).toHaveAttribute('src', errorIcon)
    })
  })
})
