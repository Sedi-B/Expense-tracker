import React, { useState } from 'react';

const Expenses = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      addExpense({ description, amount: parseFloat(amount) });
      setDescription('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">My Monthly Expense</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className=" bg-slate-500 mb-4">
        <label className="block text-gray-700 mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-slate-500 my-5 text-white py-2 px-4 rounded w-full hover:bg-blue-700"
      >
        Add Expense
      </button>
    </form>
  );
};

export default Expenses;
