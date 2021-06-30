import { ApolloClient, InMemoryCache, HttpLink, gql, useQuery } from '@apollo/client'
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

export const FetchSurveyList = () => {
  const GET_SURVEY_LIST = gql`
    query Surveys($isActive: Boolean!) {
      surveys @include(if: $isActive) {
        totalCount
        edges {
          node {
            id
            title
            description
            coverImageUrl
          }
        }
      }
    }
  `

  const { data, error } = useQuery(GET_SURVEY_LIST, {
    variables: {
      isActive: true
    }
  })

  return { data, error }
}

export default SurveyAdapter
