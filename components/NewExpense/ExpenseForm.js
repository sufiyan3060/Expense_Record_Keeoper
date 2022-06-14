import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmt, setAmt] = useState("");
  const [enteredDate, setDate] = useState("");
  //Using Single state object on multiple states

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmt: "",
  //   enteredDate: "",

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amtChangeHandler = (event) => {
    setAmt(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmt: event.target.value,
    // })
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmt: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmt,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmt("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmt}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amtChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
