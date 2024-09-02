import { useState } from 'react';
import Header from './Components/Header';
import Expenses from './Components/Expenses';
import List from './Components/List';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="bg-gray-500 min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <Header />
        <Expenses addExpense={addExpense} />
        <List expenses={expenses} />
      </div>
    </div>
  );
};

export default App;
