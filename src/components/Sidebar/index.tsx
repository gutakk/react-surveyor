import React, { useContext } from 'react'

import * as Constants from 'constants/auth'
import { AuthContext } from 'contexts/auth'

type SidebarProps = {
  isOpen: boolean
}

const Sidebar = ({ isOpen }: SidebarProps): JSX.Element => {
  const { dispatch } = useContext(AuthContext)

  const logout = () => {
    dispatch({
      type: Constants.LOGOUT
    })
  }

  return (
    <div className={`${isOpen ? 'sidebar sidebar--active' : 'sidebar'}`} data-test-id="sidebar">
      <div className="sidebar__content">
        <p className="sidebar__user">User</p>
        <hr />
        <p className="sidebar__choice" onClick={logout} role="presentation">
          Logout
        </p>
      </div>
    </div>
  )
}

export default Sidebar
