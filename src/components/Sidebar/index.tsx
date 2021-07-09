import React from 'react'

type SidebarProps = {
  isOpen: boolean
}

const Sidebar = ({ isOpen }: SidebarProps): JSX.Element => {
  return (
    <div className={`${isOpen ? 'sidebar sidebar--active' : 'sidebar'}`} data-test-id="sidebar">
      <div className="sidebar__content">
        <p className="sidebar__user">User</p>
        <hr />
        <p className="sidebar__choice">Logout</p>
      </div>
    </div>
  )
}

export default Sidebar
