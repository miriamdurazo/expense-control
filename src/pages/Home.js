import React from 'react';
import { Hero } from '../components/Hero';
import { PracticeGraph } from '../components/PracticeGraph';
import { AddExpense } from '../components/AddExpense';
import { ExpenseList } from '../components/ExpenseList';
import { Converter } from '../components/Converter';

export const Home = () => {
  return (
    <div name='home'>
      <Hero />
      <ExpenseList />
      <AddExpense />
      <PracticeGraph />
      <Converter />
    </div>
  );
}