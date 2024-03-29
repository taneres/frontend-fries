import ExpenseItemDate from './ExpenseItemDate';
import Card from '../UI/Card'
import './ExpenseItem.css'

function ExpenseItem(props) {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseItemDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
