import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from 'routes'
import 'assets/stylesheets/application.scss'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes />
      </div>
    </BrowserRouter>
  )
}

export default App
