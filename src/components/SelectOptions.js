import React from "react";
import countries from "./countries.json";

export default function SelectOptions(props) {
  const {
    amount,
    isdisable,
    onChangeAmount,
    selectedCurrency,
    onChangeCurrency,
  } = props

  return (
    <div className="column-rates">
      <form className="form-inline mb-4">
        <input
          className="form-control form-control-lg"
          type="number"
          value={amount}
          disabled={isdisable}
          id="amount"
          onChange={onChangeAmount}
        />
        <select value={selectedCurrency} className="form-control form-control-lg" onChange={onChangeCurrency}>
          {countries.map(country =>
            <option
              key={country}
              value={country}
              >{country}
            </option>
          )}
        </select>
      </form>
    </div>
  )
}