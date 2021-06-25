import React from 'react'

import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import Survey from 'screens/Home/survey'

// TODO: Add lazy loader when fetch the survey
const Home = (): JSX.Element => {
  const httpLink = new HttpLink({
    uri: 'https://nimble-survey-web-staging.herokuapp.com/graphql'
  })

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('access_token')
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Survey />
    </ApolloProvider>
  )
}

export default Home
