// React app
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ExpensesProvider } from "./contexts/ExpensesContext.js";

// Components
import { Navbar } from "./components/Navbar";
import { Wrapper } from "./components/Wrapper";
import { Footer } from "./components/Footer";
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