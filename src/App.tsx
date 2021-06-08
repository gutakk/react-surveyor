import React from 'react'

import 'dummy.scss'
import 'assets/stylesheets/application.scss'
import SignIn from 'screens/SignIn'

function App(): JSX.Element {
  return (
    <div className="app">
      <SignIn />
    </div>
  )
}

export default App
