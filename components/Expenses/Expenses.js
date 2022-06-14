import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList.js";
import ExpensesChart from "./ExpensesChart.js";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {/* First method to conditional approach */}
        {/* {filteredExpenses.length === 0 ? (
        <p>No Expenses Found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
            key={expense.id}
            description={expense.title}
            amt={expense.amount}
            dt={expense.date}
          />
        ))
      )} */}
        {/* Second method to conditional approach */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>};
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            description={expense.title}
            amt={expense.amount}
            dt={expense.date}
          />
        ))}; */}
        {/* Third method to conditional approach */}
        <ExpenseList item={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
