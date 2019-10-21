import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className='navBar'>
      <nav>
        <ul>
          <li><a href='/'></a></li>
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
