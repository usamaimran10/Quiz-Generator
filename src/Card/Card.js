import React from "react";
import classes from "./Card.module.css";
import { useRouter } from "next/router";
const Card = () => {
  const diff = ["Easy", "Medium", "Hard"];
  const cate = ["Sports", "History", "Politics"];
  const router = useRouter();

  return (
    <div className={classes.card}>
      <div>
        <h1 className={classes.heading}>Setup Quiz</h1>
      </div>
      <div className={classes.formQuest}>
        <div>
          <span>Number of question</span>
        </div>
        <div>
          <input
            type="number"
            min="1"
            max="10"
            defaultValue={1}
            className={classes.questions}
          />
        </div>
      </div>
      <div className={classes.formQuest}>
        <div>
          <span>Category</span>
        </div>
        <div>
          <select className={classes.Category} type="Dropdown">
            {cate.map((val) => {
              return <option value={val}>{val}</option>;
            })}
          </select>
        </div>
      </div>
      <div className={classes.formQuest}>
        <div>
          <span>Select Difficulty</span>
        </div>
        <div>
          <select className={classes.Category} type="Dropdown">
            {diff.map((val) => {
              return <option value={val}>{val}</option>;
            })}
          </select>
        </div>
      </div>
      <div onClick={() => router.push("/Quiz")}>
        <button className={classes.btn}>Start</button>
      </div>
    </div>
  );
};

export default Card;
