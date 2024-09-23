import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // levitetään lomakkeelta saatu data
      id: Math.random().toString() // lisätään uniikki ID
    };
    props.onAddExpense(expenseData); // siirretään tieto ylöspäin App-komponentille
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
