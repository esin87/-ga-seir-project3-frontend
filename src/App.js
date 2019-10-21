import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div>
      <nav>
        <h2>Dang-Good Desserts Zone</h2>
        <ul>
          <li><a className='navIcon' href='/'>Home</a></li>
          <li><a className='navIcon' href='#'>Create Recipe</a></li>
        </ul>
      </nav>
      <body>
        <Dashboard/>
      </body>
    </div>
  );
}

export default App;
