import React from "react";

const ExpenseTable = ({ expenses, onDelete, onSort }) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort("description")}>Description ⬍</th>
          <th>Amount</th>
          <th onClick={() => onSort("category")}>Category ⬍</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            </td>     </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
