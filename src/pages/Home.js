import React from 'react';
import { Hero } from '../components/Hero';
import { PracticeGraph } from '../components/PracticeGraph';
import { AddExpense } from '../components/AddExpense';
import { ExpenseList } from '../components/ExpenseList';
import { Budget } from "./components/Budget.js";
import { Income } from "./components/Income.js";
import { IncomePercentile } from "./components/comparison.js";import ExpenseTotal from './components/ExpenseTotal.js';
import { Converter } from '../components/Converter';

export const Home = () => {
  return (
    <div name='home'>
      <Hero />
      <Budget />
      <Income />
      <IncomePercentile />
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