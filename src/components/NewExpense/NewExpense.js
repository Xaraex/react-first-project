import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false); //  Lopetetaan muokkaus tallennuksen jälkeen
  };

  const startEditingHandler = () => {
    setIsEditing(true); //  Asetetaan muokkaustila päälle
  };

  const stopEditingHandler = () => {
    setIsEditing(false); //  Asetetaan muokkaustila pois päältä
  };

  return (
    <div className="new-expense">
      {!isEditing && ( //  Jos muokkaustila EI ole päällä, näytetään painike
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && ( //  Jos muokkaustila ON päällä, näytetään lomake
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler} //  Cancel-painike aktivoi tämän
        />
      )}
    </div>
  );
};

export default NewExpense;
