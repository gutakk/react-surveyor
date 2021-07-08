import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
  gql,
  useQuery,
  DocumentNode,
  ApolloError,
  from
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

import LocalStorage from 'services/localStorage'
import refreshAccessToken from 'services/refreshToken'

class SurveyAdapter {
  static getClient = (): ApolloClient<NormalizedCacheObject> => {
    const httpLink = new HttpLink({
      uri: process.env.REACT_APP_GRAPHQL_URL
    })

    const authLink = setContext((_, { headers }) => {
      const token = LocalStorage.get('access_token')
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : ''
        }
      }
    })

    const errorLink = onError(({ networkError }) => {
      if (networkError?.message.includes('401')) {
        refreshAccessToken()
      }
    })

    const client = new ApolloClient({
      link: from([authLink, errorLink, httpLink]),
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

  static getSurveyDetailQuery = (): DocumentNode => {
    return gql`
      query Survey($surveyID: ID!) {
        survey(id: $surveyID) {
          id
          title
          description
          coverImageUrl
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

export const FetchSurveyDetail = (surveyID: string): GraphQLUseQuery => {
  const { data, loading, error } = useQuery(SurveyAdapter.getSurveyDetailQuery(), {
    variables: {
      surveyID: surveyID
    }
  })

  return { data, loading, error }
}

export default SurveyAdapter
