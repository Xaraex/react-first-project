import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // Määritellään title-tila ja sen päivittäjäfunktio
  const [title, setTitle] = useState(props.title);

  // Funktio, joka päivittää title-tilan
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title); // Tulostaa alkuperäisen otsikon
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* title-tilaa käytetään h2-elementissä */}
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* Nappi, joka kutsuu clickHandler-funktiota */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
