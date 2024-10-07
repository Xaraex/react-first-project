import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  // Tilamuuttuja suodatetulle vuodelle
  const [filteredYear, setFilteredYear] = useState('2024');

  // Funktio, jota kutsutaan, kun valitaan uusi vuosi
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map((expense) => (
        <ExpenseItem 
          key={expense.id} 
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date} 
        />
      ))}
    </Card>
  );
};

export default Expenses;
