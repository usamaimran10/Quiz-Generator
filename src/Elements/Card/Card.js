import React from "react";
import classes from "./Card.module.css";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const Card = () => {
  const diff = ["easy", "medium", "hard"];
  const cate = [
    { value: 21, label: "sports" },
    { value: 22, label: "geography" },
    { value: 23, label: "history" },
  ];
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ difficulty, amount, category }) => {
    const route = `/quiz?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`;
    router.push(route);
  };
  return (
    <div className={classes.card}>
      <div>
        <h1 className={classes.heading}>Setup Quiz</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formQuest}>
          <div>
            <span>Number of question</span>
          </div>
          <div>
            <input
              {...register("amount")}
              type="number"
              min="1"
              max="50"
              defaultValue={10}
              className={classes.questions}
            />
          </div>
        </div>
        <div className={classes.formQuest}>
          <div>
            <span>Category</span>
          </div>
          <div>
            <select
              {...register("category")}
              defaultValue="Sports"
              className={classes.Category}
              type="Dropdown"
            >
              {cate.map((val) => {
                return <option value={val.value}>{val.label}</option>;
              })}
            </select>
          </div>
        </div>
        <div className={classes.formQuest}>
          <div>
            <span>Select Difficulty</span>
          </div>
          <div>
            <select
              {...register("difficulty")}
              defaultValue="Easy"
              className={classes.Category}
              type="Dropdown"
            >
              {diff.map((val) => {
                return <option value={val}>{val}</option>;
              })}
            </select>
          </div>
        </div>
        <div>
          <button type="submit" className={classes.btn}>
            Start
          </button>
        </div>
      </form>
    </div>
  );
};

export default Card;
