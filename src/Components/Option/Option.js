import React from "react";
import classes from "./Option.module.css";
const Option = ({
  correctAns,
  incorrectAns,
  question,
  setAns,
  ans,
  count,
  setCount,
  correctAnswer,
  setCorrect,
  query,
  setOpen,
}) => {
  const crtAns = (e) => {
    const answer = e.target.value;
    // console.log(answer);

    if (answer == correctAns) {
      setAns(ans + 1);
    }
    if (count + 1 === parseInt(query.amount)) {
      setOpen(true);
      return;
    }
    setCount(count + 1);
  };
  const options = [correctAns, ...incorrectAns];
  const shuffled = options
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return (
    <div>
      <div>
        <h1 className={classes.heading}>{question}</h1>
      </div>

      <div>
        {shuffled?.map((val) => {
          return (
            <button value={val} onClick={crtAns} className={classes.ansBtn}>
              {val}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Option;
