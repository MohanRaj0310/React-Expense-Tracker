function ExpenseDate (props){
  const month = props.date.toLocaleString('en-gb', { month: 'long'})
  const day = props.date.toLocaleString('en-gb', {day: '2-digit'})
  const year = props.date.getFullYear()
  console.log(props)
  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  )
}

export default ExpenseDate