import React, { useContext } from 'react';
import { ExpensesContext } from "../contexts/ExpensesContext";
import { Converter } from './Converter';

export const TotalLeft = () => {
  
  const { income } = useContext(ExpensesContext);
  const { expensesTotal } = useContext(ExpensesContext);
  const remaining = { income } - { expensesTotal };
  /*if (remaining > 0) {*/
    return (
      <div>
      <hr />
        <div className='totalLeftContainer'>
          <div className='totalLeftCol'>
            <h2 className='h2El1'>Congratulations! You have</h2>
            <button className='totalLeft' disabled={true} value={remaining}>{remaining}</button>
            <h2 className='h2El2'>remaining</h2>
            <h3 className='h3El'>Use the currency exchange calculator to see if you could send money or save it for your next holiday!</h3>
            <button className='currencyBtn' onClick={<Converter />}>Currency</button>
          </div>
        </div>
      <hr />
      </div>
    );
  /*}*/
}