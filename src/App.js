import React from 'react';
// import Navbar from './components/Navbar.js';
import ExpensesCategories from './components/ExpensesCategories';
// import ExpensesGraph from './components/ExpensesGraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* {<Navbar />} */}
        <p>
          Keep track of your expenses.
        </p>
        <ExpensesCategories />
        {/* {<ExpensesGraph />} */}
      </header>
    </div>
  );
}

export default App;
