import ExpenseItem from "./components/ExpenseItem";
import "./components/ExpenseItem.css";
const Template = function (props){
  console.log(arguments)
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
      date: new Date(2021, 7, 15)
    },
    {
      id: 'e2',
      title: 'buy wisky',
      amount: 750,
      date: new Date(2021, 5, 16)
    },
    {
      id: 'e3',
      title: 'HomeLoan',
      amount: 30000,
      date: new Date(2021, 10, 17)
    },
    {
      id: 'e4',
      title: 'Grocery Item',
      amount: 67000,
      date: new Date(2021, 11, 18)
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount}
        date={expenses[0].date}/>
      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount}
        date={expenses[1].date}/>
      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount}
        date={expenses[2].date}/>
      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount}
        date={expenses[3].date}/>
      <Template title={expenses[2].title}/>
      {/*<Template title={expenses.forEach((userInfo)=> {
        return userInfo
      })}/>*/}
    </div>
  );
}
export default App;



