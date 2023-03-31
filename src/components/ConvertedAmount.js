import React from "react";

export default function ConvertedAmount(props) {
  const {
    amount,
    isdisable,
    onChangeAmount,
  } = props

  return (
    <div className='p-2'>
      <input
        className="block bg-white w-80 border border-slate-300 rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-md"
        type="number"
        value={amount}
        disabled={isdisable}
        id="amount2"
        onChange={onChangeAmount}
      />
    </div>
  )
}