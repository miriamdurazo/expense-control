import React, {useContext} from 'react';
import { ExpensesContext } from '../contexts/ExpensesContext.js';

export const IncomePercentile = () => {
    const { income } = useContext(ExpensesContext);
    // let income = parseInt(response);
    switch (true) {
        case income > 14622:
            return <span className = "incomePercentile" style = {{color:"green"}}>99th percentile</span>
        case income > 5170:
            return <span className = "incomePercentile" style = {{color:"green"}}>90th percentile</span>
        case income > 3413:
            return <span className = "incomePercentile" style = {{color:"green"}}>75th percentile</span>
        case income > 2195:
            return <span className = "incomePercentile" style = {{color:"yellow"}}>50th percentile</span>
        case income > 1263:
            return <span className = "incomePercentile" style = {{color:"orange"}}>25th percentile</span>
        case income < 1263:
            return <span className = "incomePercentile" style = {{color:"red"}}>10th percentile</span>
    }
}