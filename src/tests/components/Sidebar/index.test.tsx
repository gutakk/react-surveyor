import React from 'react'

import { render } from '@testing-library/react'

import Sidebar from 'components/Sidebar'

describe('given Sidebar component is mounted', () => {
  describe('given sidebar is open', () => {
    it('renders sidebar', () => {
      const { getByTestId } = render(<Sidebar isOpen={true} />)
      const sidebar = getByTestId('sidebar')

      expect(sidebar).toBeInTheDocument()
    })

    it('renders active class', () => {
      const { getByTestId } = render(<Sidebar isOpen={true} />)
      const sidebar = getByTestId('sidebar')

      expect(sidebar).toHaveAttribute('class', 'sidebar sidebar--active')
    })

    it('renders user', () => {
      const { getByText } = render(<Sidebar isOpen={true} />)
      const user = getByText('User')

      expect(user).toBeInTheDocument()
    })

    it('renders logout choice', () => {
      const { getByText } = render(<Sidebar isOpen={true} />)
      const logout = getByText('Logout')

      expect(logout).toBeInTheDocument()
    })
  })

  describe('given sidebar is closed', () => {
    it('does NOT render active class', () => {
      const { getByTestId } = render(<Sidebar isOpen={false} />)
      const sidebar = getByTestId('sidebar')

      expect(sidebar).toHaveAttribute('class', 'sidebar')
    })
  })
})
