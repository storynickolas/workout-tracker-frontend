import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [workOut, setWorkOut] = useState('TEST')

  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((r) => r.json())
      .then((data) =>setWorkOut(data[0].name))
  })

  return (
    <div className="App">
      <header className="App-header">
        {workOut}
      </header>
    </div>
  );
}

export default App;
