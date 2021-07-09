import SurveyAdapter from 'adapters/survey'

export enum homeResponseType {
  valid,
  unauthorized,
  networkError,
  graphqlError
}

const getPayload = (type: homeResponseType): any => {
  switch (type) {
    case homeResponseType.valid:
      return { data: {} }
    case homeResponseType.unauthorized:
      return { error: new Error('Response not successful: Received status code 401') }
    case homeResponseType.networkError:
      return { error: new Error('Response not successful: Received status code 500') }
    case homeResponseType.graphqlError:
      return { errors: [] }
  }
}

const homeResponse = (type: homeResponseType): any => {
  const surveyListQuery = SurveyAdapter.getSurveyListQuery()

  return {
    request: {
      query: surveyListQuery,
      variables: { isActive: true }
    },
    ...getPayload(type)
  }
}

export default homeResponse
