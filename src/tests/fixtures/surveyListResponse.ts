import SurveyAdapter from 'adapters/survey'

export enum surveyListResponseType {
  valid,
  empty,
  unauthorized,
  networkError,
  graphqlError
}

const getPayload = (type: surveyListResponseType): any => {
  switch(type) {
    case surveyListResponseType.valid:
      return {
        result: {
          data: {
            surveys: {
              edges: [
                {
                  node: {
                    id: '1',
                    title: 'title-1',
                    description: 'description-1',
                    coverImageUrl: 'image-1'
                  }
                }
              ]
            }
          }
        }
      }
    case surveyListResponseType.empty:
      return {
        result: {
          data: {
            surveys: {
              edges: []
            }
          }
        }
      }
    case surveyListResponseType.unauthorized:
      return { error: new Error('Response not successful: Received status code 401') }
    case surveyListResponseType.networkError:
      return { error: new Error('Response not successful: Received status code 500') }
    case surveyListResponseType.graphqlError:
      return { errors: [] }
  }
}

const surveyListResponse = (type: surveyListResponseType): any => {
  const surveyListQuery = SurveyAdapter.getSurveyListQuery()

  return {
    request: {
      query: surveyListQuery,
      variables: { isActive: true }
    },
    ...getPayload(type)
  }
}

export default surveyListResponse
