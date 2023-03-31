import React, { useEffect, useState } from "react";
import exchangeIcon from "../assets/images/exchangeIcon.gif";
import ConvertedAmount from "./ConvertedAmount";
import SelectAmount from "./SelectAmount";
import SelectOption from "./SelectOption";

export const Converter = () => {
  const [fromCurrency, setFromCurrency] = useState("GBP - British Pound Sterling");
  const [toCurrency, setToCurrency] = useState("EUR - Euro");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [firstAmount, setFirstAmount] = useState(1);
  const [secondAmount, setSecondAmount] = useState(0);
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "3on336kylMg5q75MCYFfdTYZIbPujehU");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    
    const baseURL = "https://api.apilayer.com/exchangerates_data/latest";
    
      fetch(
        `${baseURL}?symbols=${toCurrency.substring(0,3)}&base=${fromCurrency.substring(0,3)}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          const amountOne = document.getElementById("amount1").value;
          setExchangeRate(data.rates[toCurrency.substring(0,3)]);
          setSecondAmount((amountOne*(data.rates[toCurrency.substring(0,3)])).toFixed(4));
          setDate(new Date(data.date).toLocaleDateString());
          setTime(new Date(data.timestamp).toLocaleTimeString());
        });
  }, [fromCurrency, toCurrency]);
  
  return(
    <div className="mb-8">
      <div className="flex flex-row">
        <div className='pt-12 pl-4 flex flex-col rounded-md max-w-sm bg-gray-200'>
          <h3 className='mb-8 text-2xl'>Input Options</h3>
          <label className='mb-4'>
            Select base currency for conversion:
              <SelectOption
                selectedCurrency={fromCurrency}
                onChangeCurrency={(e) => {
                  setFromCurrency(e.target.value)
                  }
                }
              />
          </label>
          <label className='mb-4'>
            Select target currency to convert to:
              <SelectOption  
                selectedCurrency={toCurrency}
                onChangeCurrency={(e) => setToCurrency(e.target.value)}
              />
          </label>
          <label className="mb-8">
            Select the amount to be converted:
              <SelectAmount 
                amount={firstAmount}
                isdisable={false}
                onChangeAmount={(e) => {
                  setFirstAmount(e.target.value)
                  setSecondAmount((e.target.value*exchangeRate).toFixed(4))
                  }
                }
              />
          </label>

          <div className="flex pr-4 justify-center mb-8">
            <div className='py-2 pl-2'>
              <button className='w-40 py-2 bg-blue-800 rounded-full text-white font-semibold' onClick={handleSwitch}>Swap currencies</button>
            </div>
          </div>

          <hr className="mb-8"/>

          <label className="mb-4">
            This is your converted amount:
              <ConvertedAmount
                amount={secondAmount}
                isdisable={true}
              />
          </label>
        </div>
      
        <div className='pl-24 flex flex-col'>
          <img  className="w-[350px]"
            id="exchangeImg"
            src={exchangeIcon}
            alt="your finances at one place"
          />
          <h1 className="text-3xl py-4 mb-4 text-blue-800 -mt-20 font-semibold">
            Currency Converter & Exchange Rates
          </h1>
          <h2 className="mb-4 text-xl font-bold">
            Currency conversion
          </h2>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="bg-white divide-y divide-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-10 py-2 text-right text-gray-400 text-md font-light tracking-wider"></th>
                  <th className="px-4 py-2 text-right text-gray-400 text-md font-light tracking-wider">
                    base_currency
                  </th>
                  <th className="px-4 py-2 text-right text-gray-400 text-md font-light tracking-wider">
                    converted_currency
                  </th>
                  <th className="px-4 py-2 text-right text-gray-400 text-md font-light tracking-wider">
                    input_amount
                  </th>
                  <th className="px-4 py-2 text-right text-gray-400 text-md font-light tracking-wider">
                    converted_amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <th className="px-10 py-2 text-right bg-gray-200 text-gray-400 text-md font-light tracking-wider"></th>
                <th className="px-4 py-2 text-right text-md font-light tracking-wider">
                  {fromCurrency}
                </th>
                <th className="px-4 py-2 text-right text-md font-light tracking-wider">
                  {toCurrency}
                </th>
                <th className="px-4 py-2 text-right text-md font-light tracking-wider">
                  {firstAmount}
                </th>
                <th className="px-4 py-2 text-right text-md font-light tracking-wider">
                  {secondAmount}
                </th>
              </tbody>
            </table>
          </div>
          
          <div className="mt-16">
            <h3 className="mb-4"><strong>About</strong></h3>
            <ul>
              <li><strong>Data source:</strong> <a href='https://exchangeratesapi.io/'>Exchange Rates API</a> which delivers real-time currency exchange rate data.</li>
              <li><strong>Last updated in:</strong> {date} {time}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}