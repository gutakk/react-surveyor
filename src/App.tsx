import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'

import SurveyAdapter from 'adapters/survey'
import { AuthProvider } from 'contexts/auth'
import Routes from 'routes'
import 'assets/stylesheets/application.scss'

function App(): JSX.Element {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ApolloProvider client={SurveyAdapter.getClient()}>
          <div className="app">
            <Routes />
          </div>
        </ApolloProvider>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
