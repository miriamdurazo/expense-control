import React from 'react';

export default function InputAmount(props) {
  const {
    onChangeAmount,
    amount
  } = props
  
  return (
    <div>
      <input type='number' value={amount} min={0} id='amount' onChange={onChangeAmount}></input>
    </div>
  )
}