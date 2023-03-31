import React from "react";
import countries from "./countries.json";

export default function SelectOption(props) {
  const {
    selectedCurrency,
    onChangeCurrency,
  } = props

  return (
    <div className='p-2'>
      <select className="block bg-white mr-4 w-80 border border-slate-300 rounded-md py-3 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-md" value={selectedCurrency} onChange={onChangeCurrency}>
        {countries.map(country =>
          <option
            key={country}
            value={country}
          >{country}
          </option>
        )}
      </select>
    </div>
  )
}