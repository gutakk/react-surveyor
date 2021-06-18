import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from 'contexts/auth'
import Routes from 'routes'
import 'assets/stylesheets/application.scss'

function App(): JSX.Element {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app">
          <Routes />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
