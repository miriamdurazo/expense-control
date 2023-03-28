import React from 'react';

export default function DisplayAmount(props) {
  const {
    fromCurrency,
    toCurrency,
    firstAmount,
    secondAmount,
    date,
    time
  } = props

  return (
    <div className='rate' id='rate'>
      <p className='base-data'>{firstAmount}{fromCurrency}</p>
      <p className='rate-data'>{secondAmount}{toCurrency}</p>
      <p className='data-info'>{date}{time}</p>
    </div>
  )
}

      /*<p className='base-data'>1GBP</p>
      <p className='rate-data'>0.88EUR</p>
      <p className='data-info'>12/04/2023</p>*/