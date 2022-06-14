import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const [description, setTitle] = useState(props.description);

  // const clickHandler = () => {
  //   setTitle("Updated!!!");
  //   console.log(description);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate dt={props.dt}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{description}</h2>
        <div className="expense-item__price">Rs. {props.amt}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
