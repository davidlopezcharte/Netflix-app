import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';

function App() {
  const test = 1;
  console.log(test);
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
}

export default App;
