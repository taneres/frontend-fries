import { useState } from 'react';
import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import "./Expenses.css"

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("In Expenses.js : Selected " + selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        {/* ExpensesFilter is a "controlled component" as we use 2-way binding
            a.k.a. parent component fully specifies behaviour. We say the data
            is driven by props rather than its own local state. */}
        <ExpensesFilter selectedYear={filteredYear} onFilterYear={filterYearHandler} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))};
      </Card>
    </div>
  );
}

export default Expenses;
