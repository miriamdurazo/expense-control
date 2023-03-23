// React app
import React from 'react';

// Components
import { Navbar } from './components/Navbar';

//Style
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <p>
          Keep track of your expenses.
        </p>
        
      </header>
      </div>
  );
}

export default App;
