import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card'; // Lisää import Card-komponentille
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses"> {/* Muutetaan ulompi div Card-komponentiksi */}
      {props.expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
