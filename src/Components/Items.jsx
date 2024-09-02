import React from 'react';

const Items = ({ expense }) => {
  return (
    <li className="bg-gray-100 p-4 mb-2 rounded shadow-sm">
      <div className="text-lg font-semibold">{expense.description}</div>
      <div className="text-gray-600">R{expense.amount.toFixed(2)}</div>
    </li>
  );
};

export default Items;
