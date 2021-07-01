import React, { createContext, useReducer, Dispatch } from 'react'

import SurveyBackgroundReducer from 'reducers/surveyBackground'

type SurveyBackgroundProviderProps = {
  children: JSX.Element
}

export type SurveyBackgroundState = {
  currentBackground: string
}

const initialState = {
  currentBackground: ''
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
const SurveyBackgroundContext = createContext<{
  state: SurveyBackgroundState
  dispatch: Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
})

const SurveyBackgroundProvider = ({ children }: SurveyBackgroundProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(SurveyBackgroundReducer, initialState)
  return <SurveyBackgroundContext.Provider value={{ state, dispatch }}>{children}</SurveyBackgroundContext.Provider>
}

export { SurveyBackgroundProvider, SurveyBackgroundContext }
