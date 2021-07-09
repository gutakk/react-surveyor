import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
  gql,
  useQuery,
  DocumentNode,
  ApolloError
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

class SurveyAdapter {
  static getClient = (): ApolloClient<NormalizedCacheObject> => {
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

  static getSurveyListQuery = (): DocumentNode => {
    return gql`
      query Surveys($isActive: Boolean!) {
        surveys @include(if: $isActive) {
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
  }
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
type GraphQLUseQuery = {
  data: any | undefined
  loading: boolean
  error?: ApolloError
}
/* eslint-enable  @typescript-eslint/no-explicit-any */

export const FetchSurveyList = (): GraphQLUseQuery => {
  const { data, loading, error } = useQuery(SurveyAdapter.getSurveyListQuery(), {
    variables: {
      isActive: true
    }
  })

  return { data, loading, error }
}

export default SurveyAdapter
