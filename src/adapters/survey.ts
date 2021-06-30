import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

class SurveyAdapter {
  static getClient = () => {
    const httpLink = new HttpLink({
      uri: process.env.REACT_APP_GRAPHQL_URL
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

    return client
  }
}

export default SurveyAdapter
