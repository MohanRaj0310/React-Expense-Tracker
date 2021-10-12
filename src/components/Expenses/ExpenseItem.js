import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title)//destructuring array
  console.log(title)
  const clickHandler = () => {
    setTitle('updated')
  }
  
  const [amount, setAmount] = useState(props.amount)
  const clickHandler2 = () => {
    setAmount(10000)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={clickHandler2}>Change amount</button>
      </div>
    </Card>
  )
}

export default ExpenseItem