import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [toShowForm, setToShowForm] = useState(false);

  const showFormHandler = () => {
    setToShowForm((prevState) => {
      return !prevState;
    });
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // not a good UID!
    };
    props.onAddExpense(expenseData);
  };

  let newExpenseContent = toShowForm ? (
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelHandler={showFormHandler} />
  ) : (
    <button onClick={showFormHandler}>Add New Expense</button>
  );

  return <div className="new-expense">{newExpenseContent}</div>;
}

export default NewExpense;
