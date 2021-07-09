/* eslint-disable @typescript-eslint/no-explicit-any */
import SurveyAdapter from 'adapters/survey'
import { graphQLErrorResponse, graphQLErrorType } from 'tests/fixtures/graphqlResponse'

const surveyDetailQuery = SurveyAdapter.getSurveyDetailQuery()

export const surveyDetailSuccessResponse = (surveyID: string): any => {
  const request = {
    request: {
      query: surveyDetailQuery,
      variables: { surveyID: surveyID }
    }
  }

  return {
    ...request,
    result: {
      data: {
        survey: {
          id: '1',
          title: 'Scarlett Bangkok',
          description: 'We would love ot hear from you!',
          coverImageUrl: 'https://dhdbhh0jsld0o.cloudfront.net/m/1ea51560991bcb7d00d0_'
        }
      }
    }
  }
}

export const surveyDetailErrorResponse = (type: graphQLErrorType, surveyID: string): any => {
  const request = {
    request: {
      query: surveyDetailQuery,
      variables: { surveyID: surveyID }
    }
  }

  return graphQLErrorResponse(type, request)
}
