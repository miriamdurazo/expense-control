import React, { useEffect, useState } from 'react';
import exchangeIcon from '../assets/images/exchangeIcon.gif';
import CurrencyRow from './CurrencyRow';
import DisplayAmount from './DisplayAmount';
import InputAmount from './InputAmount';

export const Exchange = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [firstAmount, setFirstAmount] = useState(1);
  const [secondAmount, setSecondAmount] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const myHeaders = new Headers();
  myHeaders.append('apikey', '3wiIIlQx49x4QFG83jKzK8Iw3sXGjvJ');

  const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

  useEffect(() => {
    fetch('https://api.apilayer.com/exchangerates_data/latest?', requestOptions)
      .then(response => response.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[49];
        const secondCurrency = Object.keys(data.rates)[46];
        setDate(new Date(data.date).toLocaleDateString());
        setTime(new Date(data.timestamp).toLocaleTimeString());
        console.log(date)
        console.log(time)
        console.log(data)

        setCurrencyOptions([...Object.keys(data.rates)]);
        setFromCurrency(firstCurrency);
        setToCurrency(secondCurrency);
        setExchangeRate(data.rates[firstCurrency]);
        setSecondAmount((firstAmount * exchangeRate).toFixed(2));
      })
  }, [])

  useEffect(() => {
    const baseURL = 'https://api.apilayer.com/exchangerates_data/latest';
    if(fromCurrency != null && toCurrency != null) {
      fetch( `${baseURL} ?symbols=${toCurrency} &base=${fromCurrency}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          setExchangeRate(data.rates[toCurrency])
          setSecondAmount((firstAmount * exchangeRate).toFixed(2))
          setDate(new Date(data.date).toLocaleDateString());
          setTime(new Date(data.timestamp).toLocaleTimeString());
        })
        console.log('=================' +exchangeRate)
        console.log(secondAmount)
      }
  }, [fromCurrency, toCurrency])
  
  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setSecondAmount((firstAmount * exchangeRate).toFixed(2))
  }
  
  return (
    <div>
      <hr />
      <div className='exchange-section'>
        <img id='exchangeImg' src={ exchangeIcon } alt='your finances at one place' />
        <h1 className='exchange-title'>Currency Converter<br/>&<br/>Exchange Rates</h1>
        <p className='exchange-p'>Choose the currency and the amount to get up-to-date rates</p>

        <div className='exchange-container'>
          <div className='currency'>
            <CurrencyRow
              currencyOptions = { currencyOptions }
              selectedCurrency = { fromCurrency }
              onChangeCurrency = { e => setFromCurrency(e.target.value) }
            />

            <button className='btn' id='swap' onClick={handleSwitch}>Swap</button>
               
            <CurrencyRow
              currencyOptions = { currencyOptions }
              selectedCurrency = { toCurrency }
              onChangeCurrency = { e => setToCurrency(e.target.value) }
            />
          </div>

          <div className='input-amount'>
            <InputAmount
              amount={firstAmount}
              onChangeAmount={e => 
                {setFirstAmount(e.target.value);
                setSecondAmount((firstAmount * exchangeRate).toFixed(2))}
              }
            />
            <DisplayAmount
              fromCurrency = { fromCurrency }
              toCurrency = { toCurrency }
              firstAmount = { firstAmount }
              secondAmount = { secondAmount }
              date = { date }
              time = { time }
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}