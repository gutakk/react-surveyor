import * as Constants from 'constants/surveyBackground'
import { SurveyBackgroundState } from 'contexts/surveyBackground'

type ActionType = {
  type: string
  payload?: string
}

const SurveyBackgroundReducer = (state: SurveyBackgroundState, action: ActionType): SurveyBackgroundState => {
  switch (action.type) {
    case Constants.SURVEY_BACKGROUND: {
      const background = action?.payload
      if (!background) {
        return state
      }

      return { ...state, currentBackground: background }
    }
    default: {
      return state
    }
  }
}

export default SurveyBackgroundReducer
