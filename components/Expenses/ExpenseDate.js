import React from "react";
import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.dt.toLocaleString("en-US", { month: "long" });
  const year = props.dt.getFullYear();
  const dy = props.dt.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div>{month}</div>
      <div>{year}</div>
      <div>{dy}</div>
    </div>
  );
}

export default ExpenseDate;
