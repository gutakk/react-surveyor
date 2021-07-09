/* eslint-disable @typescript-eslint/no-explicit-any */
import SurveyAdapter from 'adapters/survey'
import { graphQLErrorResponse, graphQLErrorType } from 'tests/fixtures/graphqlResponse'

const surveyListQuery = SurveyAdapter.getSurveyListQuery()
const request = {
  request: {
    query: surveyListQuery,
    variables: { isActive: true }
  }
}

export const homeSuccessResponse = (): any => {
  return {
    ...request,
    data: {}
  }
}

export const homeErrorResponse = (type: graphQLErrorType): any => {
  return graphQLErrorResponse(type, request)
}
