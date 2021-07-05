import React from 'react'

type SidebarProps = {
  isOpen: boolean
}

const Sidebar = ({ isOpen }: SidebarProps): JSX.Element => {
  return (
    <div className={`${isOpen ? 'sidebar sidebar--active' : 'sidebar'}`} data-test-id="sidebar">
      <span></span>
    </div>
  )
}

export default Sidebar
