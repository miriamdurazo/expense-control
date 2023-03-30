// React app
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ExpensesProvider } from "./contexts/ExpensesContext.js";

// Components
import { Navbar } from "./components/Navbar";
import { Wrapper } from "./components/Wrapper";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import PracticeGraph from './components/PracticeGraph.js';
import AddExpense from "./components/AddExpense.js";
import ExpenseList from "./components/ExpenseList.js";
import { Budget } from "./components/Budget.js";
import { Income } from "./components/Income.js";
import IncomePercentile from "./components/comparison.js";import ExpenseTotal from './components/ExpenseTotal.js';

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

// Style
import "./index.css";
import './styles/expenses.css';

function App() {
  return (
    <ExpensesProvider>
      <Router>
        <div>
          <Navbar />
          <Hero />
          <Budget />
          <Income />
          <IncomePercentile/>
          
          <ExpenseList />

          <div class="p-4 flex justify-center">
            <AddExpense />
          </div>

          <div class="p-4 flex justify-center">
            <ExpenseTotal />  
          </div>
          
          <div className="p-8 max-w-full" >
            <PracticeGraph />
          </div>
          
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </ExpensesProvider>
  );
}

export default App;
