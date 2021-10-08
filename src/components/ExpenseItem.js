import './ExpenseItem.css';

function ExpenseItem (props){
  const expenseDate = new Date(2021, 6, 10)
  const expenseTitle = "Car Insurance"
  const expenseAmount = "256"
  // const user = {
  //   age: 90,
  //   name: 'gandhi'
  // }
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem