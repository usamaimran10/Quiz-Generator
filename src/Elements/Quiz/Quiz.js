import React, { useState, useEffect } from "react";
import classes from "./Quiz.module.css";
import Option from "../../Components/Option/Option";
import { useRouter } from "next/router";
import { getQuiz } from "../../api/quiz";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
const Quiz = () => {
  const countInc = () => {
    setCount(count + 1);
  };
  const { query } = useRouter();
  const { data, isLoading } = useQuery(
    ["quiz"],
    async () => {
      const results = await getQuiz(query);
      console.log(results);
      return results;
    },
    {
      enabled: Boolean(Object.keys(query ?? {}).length),
    }
  );

  const [count, setCount] = useState(0);
  return (
    <>
      {" "}
      {isLoading ? (
        <div style={{ height: "100vh" }}>
          <Loader />
        </div>
      ) : (
        <div className={classes.quiz}>
          <div className={classes.quizCard}>
            <div className={classes.correctAnswers}>
              <span>Correct Answers : 0/0</span>
            </div>
            <div>
              <div>
                <Option
                  correctAns={data?.data?.results[count]?.correct_answer}
                  incorrectAns={data?.data?.results[count]?.incorrect_answers}
                  question={data?.data?.results[count]?.question}
                />
              </div>
            </div>

            <div>
              <button className={classes.submit} onClick={countInc}>
                next question
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
