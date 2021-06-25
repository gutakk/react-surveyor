import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

class SurveyAdapter {
  static fetchSurveyList = () => {
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

    const GET_SURVEY_LIST = gql`
      query Surveys($isActive: Boolean!) {
        surveys @include(if: $isActive) {
          totalCount
          edges {
            node {
              isActive
              id
              title
              description
            }
          }
        }
      }
    `

    return client.query({
      query: GET_SURVEY_LIST,
      variables: {
        isActive: true
      }
    })
  }
}

export default SurveyAdapter
