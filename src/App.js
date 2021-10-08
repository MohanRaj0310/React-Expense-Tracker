import ExpenseItem from "./components/ExpenseItem";
const Template = function (){
  return (
    <div>
      <h1>i'm from Template fucntion or components</h1>
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
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount}></ExpenseItem>
      <Template />
    </div>
  );
}
export default App;



