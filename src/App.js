import ExpenseItem from "./components/ExpenseItem";
import "./components/ExpenseItem.css";
const Template = function (props){
  return (
    <div>
      <h1 className="expense-item__price">{props.title}</h1>
    </div>
  )
}
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'shopping things',
      amount: 2000,
      date: new Date(2021, 7, 10)
    },
    {
      id: 'e2',
      title: 'buy wisky',
      amount: 750,
      date: new Date(2021, 5, 10)
    },
    {
      id: 'e3',
      title: 'HomeLoan',
      amount: 30000,
      date: new Date(2021, 10, 6)
    },
    {
      id: 'e4',
      title: 'Grocery things',
      amount: 2000,
      date: new Date(2021, 10, 6)
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount}></ExpenseItem>
      <Template title={expenses[3].title}/>
    </div>
  );
}
export default App;



