import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  //   let expensesContent = <p>No Expenses Found</p>;
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Record</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          description={expense.title}
          amt={expense.amount}
          dt={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
