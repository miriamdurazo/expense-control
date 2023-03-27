// React app
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import { Navbar } from './components/Navbar';
import { Wrapper } from './components/Wrapper';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import ExpensesCategories from './components/ExpensesCategories.js';
// import PracticeGraph from './components/PracticeGraph.js';
// import AddExpense from './components/AddExpense.js';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Style
import './index.css'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <ExpensesCategories />
        {/* <AddExpense /> */}
      {/* <PracticeGraph /> */}
        <Wrapper>
          <Routes>
            <Route path = "/" element = { <Home /> } />
            <Route path = "about" element = { <About /> } />
            <Route path = "contact" element = { <Contact /> } />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
