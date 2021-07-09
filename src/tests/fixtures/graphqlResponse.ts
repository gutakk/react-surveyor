/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
export enum graphQLErrorType {
  unauthorized,
  networkError,
  graphqlError
}

export const getError = (type: graphQLErrorType): any => {
  switch (type) {
    case graphQLErrorType.unauthorized:
      return { error: new Error('Response not successful: Received status code 401') }
    case graphQLErrorType.networkError:
      return { error: new Error('Response not successful: Received status code 500') }
    case graphQLErrorType.graphqlError:
      return { errors: [] }
  }
}

export const graphQLErrorResponse = (type: graphQLErrorType, request: any): any => {
  return {
    ...request,
    ...getError(type)
  }
}
