import React from 'react';
import { Hero } from '../components/Hero';
import { Budget } from "../components/Budget.js";
import { Income } from "../components/Income.js";
import { IncomePercentile } from "../components/comparison.js";
import { ExpenseList } from '../components/ExpenseList';
import { AddExpense } from '../components/AddExpense';
import { ExpenseTotal } from '../components/ExpenseTotal.js';
import { PracticeGraph } from '../components/PracticeGraph';
import { Converter } from '../components/Converter';
import { Remaining } from "../components/Remaining";
/*import { TotalLeft } from '../components/TotalLeft';*/

export const Home = () => {
  return (
    <div name='home'>
      <Hero />
      <Income />
      <IncomePercentile />
      <Budget />
      <Remaining />
      <ExpenseList />
      <AddExpense />
      <ExpenseTotal />
      <div className="p-8">
        <PracticeGraph />
      </div>
      <Converter />
    </div>
  );
}