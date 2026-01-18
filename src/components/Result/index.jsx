import React from "react";
import { useSelector } from "react-redux";
import styles from "./Result.module.css";

const Result = () => {
  const result = useSelector(
    (state) => state.questionnaire.result
  );

  if (!result) return null;

  return <div className={styles.result}>{result}</div>;
};

export default Result;
