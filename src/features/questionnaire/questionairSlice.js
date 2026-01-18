import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      text: "Тебе нравится React?",
      options: ["Да", "Нет"],
      answer: null,
    },
    {
      id: 2,
      text: "Ты используешь Redux?",
      options: ["Да", "Нет"],
      answer: null,
    },
  ],
  result: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion(state, action) {
      const { id, answer } = action.payload;
      const question = state.questions.find((q) => q.id === id);
      if (question) {
        question.answer = answer;
      }
    },
    submitAnswers(state) {
      const yesCount = state.questions.filter(
        (q) => q.answer === "Да"
      ).length;

      state.result = `Ответов "Да": ${yesCount} из ${state.questions.length}`;
    },
  },
});

export const { answerQuestion, submitAnswers } =
  questionnaireSlice.actions;

export default questionnaireSlice.reducer;
