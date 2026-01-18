import React from "react";
import { useDispatch } from "react-redux";
import { answerQuestion } from '../../features/questionnaire/questionairSlice';
import styles from "./Question.module.css";

const Question = ({ question }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.question}>
      <p>{question.text}</p>
      {question.options.map((option) => (
        <button
          key={option}
          className={
            question.answer === option ? styles.active : ""
          }
          onClick={() =>
            dispatch(
              answerQuestion({
                id: question.id,
                answer: option,
              })
            )
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
