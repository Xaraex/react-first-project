import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  // Tilamuuttuja suodatetulle vuodelle
  const [filteredYear, setFilteredYear] = useState('2024');

  // Funktio jota kutsutaan, kun valitaan uusi vuosi
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Suodatetaan kulut valitun vuoden mukaan
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // Aiempi ehtorakenne kommentoituna
  /*
  {filteredExpenses.length === 0 ? (
    <p>No expenses found.</p>
  ) : (
    filteredExpenses.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  )}
  */

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* Näytetään uusi ExpensesList-komponentti ja välitetään propseina filteredExpenses */}
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
