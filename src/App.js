import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div>
      <div className='navBox'>
        <h1><a className='logo' href='/'>Dang-Good Desserts Zone</a></h1>
        <nav>
          <ul>
            <li><a className='navLinks' href='/'>Home</a></li>
            <li><a className='navLinks' href='/'>Create Recipe</a></li>
          </ul>
        </nav>
      </div>
      <body>
        <Dashboard/>
      </body>
    </div>
  );
}

export default App;
