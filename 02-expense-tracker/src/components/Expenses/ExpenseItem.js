import { useState } from 'react'

import ExpenseItemDate from './ExpenseItemDate';
import Card from '../UI/Card'
import './ExpenseItem.css'

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
  }

  return (
    <Card className='expense-item'>
      <ExpenseItemDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
