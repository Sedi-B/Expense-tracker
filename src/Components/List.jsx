import React from 'react';
import Items from './Items';

const List = ({ expenses }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">List of my Monthly Expenses :</h2>
      {expenses.length === 0 ? (
        <p className="text-center text-gray-600">No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <Items key={index} expense={expense} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
