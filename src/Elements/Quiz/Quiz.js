import React, { useState, useEffect } from "react";
import classes from "./Quiz.module.css";
import Option from "../../Components/Option/Option";
import { useRouter } from "next/router";
import { getQuiz } from "../../api/quiz";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
import Modal from "../../Components/Modal/Modal";
const Quiz = () => {
  const [ans, setAns] = useState(0);
  const { query } = useRouter();
  const [open, setOpen] = React.useState(false);

  const { data, isLoading } = useQuery(
    ["quiz"],
    async () => {
      const results = await getQuiz(query);
      // console.log(results);
      return results;
    },
    {
      enabled: Boolean(Object.keys(query ?? {}).length),
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const [count, setCount] = useState(0);

  const countInc = () => {
    debugger;

    if (count + 1 === parseInt(query.amount)) {
      setOpen(true);
    } else {
      debugger;
      setCount(count + 1);
    }
  };

  const percentage = () => {
    const percent = (ans / query.amount) * 100;
    return percent;
  };
  return (
    <div>
      {" "}
      {isLoading ? (
        <div style={{ height: "100vh" }}>
          <Loader />
        </div>
      ) : (
        <div className={classes.quiz}>
          <div className={classes.quizCard}>
            <div className={classes.correctAnswers}>
              <span>
                Correct Answers : {ans}/{count}
              </span>
            </div>
            <div>
              <div>
                <Option
                  setOpen={setOpen}
                  query={query}
                  correctAns={data?.data?.results[count]?.correct_answer}
                  incorrectAns={data?.data?.results[count]?.incorrect_answers}
                  question={data?.data?.results[count]?.question}
                  ans={ans}
                  setAns={setAns}
                  count={count}
                  setCount={setCount}
                />
              </div>
            </div>
            <div>
              <button className={classes.submit} onClick={countInc}>
                next question
              </button>
            </div>
          </div>

          <Modal
            open={open}
            setOpen={setOpen}
            percentage={(ans / query.amount) * 100}
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;
