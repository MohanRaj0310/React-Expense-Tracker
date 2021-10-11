import Expenses from "./components/Expenses/Expenses";

const Template = function (props){
  // console.log(arguments)
  return (
    <div>
      <h1 className="expense-item__price">{props.title}</h1>
    </div>
  )
}
const App = () => {
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
      amount: 50000,
      date: new Date(2021, 11, 18)
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
      <Template title={expenses[2].title}/>
      {/*<Template title={expenses.forEach((userInfo)=> {
        return userInfo
      })}/>*/}
    </div>
  );
}
export default App;



