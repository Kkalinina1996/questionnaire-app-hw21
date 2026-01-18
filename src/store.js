import { configureStore } from "@reduxjs/toolkit";
import questionnaireReducer from './features/questionnaire/questionairSlice'

export const store = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
});
