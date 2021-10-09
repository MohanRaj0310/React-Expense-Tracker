import './ExpenseDate.css'
function ExpenseDate (props){
  const month = props.date.toLocaleString('en-gb', { month: 'long'})
  const day = props.date.toLocaleString('en-gb', {day: '2-digit'})
  const year = props.date.getFullYear()
  console.log(props)//{date: Wed Jun 16 2021 00:00:00 GMT+0530 (India Standard Time)}..so on .......
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  )
}

export default ExpenseDate