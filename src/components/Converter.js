import React, { useEffect, useState } from "react";
import exchangeIcon from "../assets/images/exchangeIcon.gif";
import SelectOptions from "./SelectOptions";

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

  const myHeaders = new Headers();
  myHeaders.append("apike", "gXeAL7hwu3KrpBtcsvyqRvUp4HOfPEEs");

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  useEffect(() => {
    const baseURL = "https://api.apilayer.com/exchangerates_data/latest";
    
      fetch(
        `${baseURL}?symbols=${toCurrency.substring(0,3)}&base=${fromCurrency.substring(0,3)}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          setExchangeRate(data.rates[toCurrency.substring(0,3)]);
          setSecondAmount((firstAmount*(data.rates[toCurrency.substring(0,3)])).toFixed(4));
          setDate(new Date(data.date).toLocaleDateString());
          setTime(new Date(data.timestamp).toLocaleTimeString());
          console.log(data);
          console.log("Second amount" + secondAmount);
          console.log("First amount" + firstAmount);
          console.log("Exchange rate" + exchangeRate);
        });
  }, [fromCurrency, toCurrency]);
  
  return(
    <div className="container w-80 bg-white shadow rounded my-5">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <img
            id="exchangeImg"
            src={exchangeIcon}
            alt="your finances at one place"
          />
          <h1 className="exchange-title">
            Currency Converter
            <br />&<br />
            Exchange Rates
          </h1>
          <p className="exchange-p">
            Choose the currency and the amount to get up-to-date rates
          </p>

          <div className="card card-body">
            <h5 className="base-data">{firstAmount} {fromCurrency.substring(0,3)} is equivalent to</h5>
            <h2 className="rate-data">{secondAmount} {toCurrency.substring(0,3)}</h2>
            <p className="data-info">{date} {time}</p>
          
            <div className="row">
              <div className="col-lg-10 col-md-10 col-sm-10">
                <SelectOptions
                  amount={firstAmount}
                  isdisable={false}
                  onChangeAmount={(e) => {
                    setFirstAmount(e.target.value)
                    setSecondAmount((e.target.value*exchangeRate).toFixed(4))
                    }
                  }
                  selectedCurrency={fromCurrency}
                  onChangeCurrency={(e) => {
                    setFromCurrency(e.target.value)
                    }
                  }
                />
                <SelectOptions
                  amount={secondAmount}
                  isdisable={true}
                  selectedCurrency={toCurrency}
                  onChangeCurrency={(e) => setToCurrency(e.target.value)}
                />
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 align-self-center">
                <button className="button" id="swap1" onClick={handleSwitch}>
                  Swap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}