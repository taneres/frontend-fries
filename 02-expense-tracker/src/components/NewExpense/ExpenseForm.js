import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmt, setEnteredAmt] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // Below is another way to save states with only 1 object
  /* const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmt: '',
    enteredDate: ''
  }); */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // Eg (A) Not so safe way
    /* setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    }); */
    // Eg (B) The safer way when dealing with previous states
    /* setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    }); */
  };

  const amtChangeHandler = (event) => {
    setEnteredAmt(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevent page reload

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmt,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmt("");
    setEnteredDate("");
  };

  const shortDate = new Intl.DateTimeFormat("en-CA", {
    dateStyle: "short",
  });

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
            type="number"
            value={enteredAmt}
            min="0.01"
            step="0.01"
            onChange={amtChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max={shortDate.format(Date.now())}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
