import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses'; 

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date('2022-07-14'),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date('2022-08-12'),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 300.00,
      date: new Date('2023-01-01'),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date('2023-01-09'),
    },
  ];

  // Uusi addExpenseHandler funktio, joka vastaanottaa child-komponentilta tiedon
  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense); // Tämä tulostaa siirretyn tiedon konsoliin
  };

  return (
    <div>
      {/* Välitetään addExpenseHandler funktio propsina NewExpense-komponentille */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} /> 
      <p>Janne Kolehmainen / VAMK / BIT</p>
    </div>
  );
}

export default App;
