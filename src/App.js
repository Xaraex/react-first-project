// App.js
import React from 'react';
import Expenses from './components/Expenses'; 

function App() {
  const expenses = [
    { title: 'Rent', amount: 950, date: new Date(2022, 3, 12) },
    { title: 'Groceries', amount: 150, date: new Date(2022, 4, 8) },
    { title: 'Car Maintenance', amount: 300, date: new Date(2022, 6, 18) },
    { title: 'Utilities', amount: 120, date: new Date(2022, 5, 24) },
  ];

  return (
    <div>
      <Expenses expenses={expenses} /> 
      <p>Janne Kolehmainen / VAMK / BIT</p>
    </div>
  );
}

export default App;
