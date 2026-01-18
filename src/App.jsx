import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Question from "./components/Question";
import Result from "./components/Result";
import { submitAnswers } from "./features/questionnaire/questionairSlice";

const App = () => {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state) => state.questionnaire.questions
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Анкета</h2>

      {questions.map((q) => (
        <Question key={q.id} question={q} />
      ))}

      <button onClick={() => dispatch(submitAnswers())}>
        Отправить ответы
      </button>

      <Result />
    </div>
  );
};

export default App;
