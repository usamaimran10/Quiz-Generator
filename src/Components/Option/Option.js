import React from "react";
import classes from "./Option.module.css";
const Option = ({ correctAns, incorrectAns, question }) => {
  const crtAns = (e) => {
    const ans = e.target.value;
    console.log(ans);
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
