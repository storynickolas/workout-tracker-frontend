import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [workOut, setWorkOut] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`http://localhost:9292/${page}`)
      .then((r) => r.json())
      .then((data) => setWorkOut(data))
  }, [page])

  const handleClick = () => {
    let count
    if(page === 3) {
      count = 1
    }
    else {
      count = page + 1
    }
    setPage(count)
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          workOut.map((item) => (
            <p key={item.name}>{item.name}</p>
         ))
        }
        <button onClick={() => handleClick()}></button>
      </header>
    </div>
  );
}

export default App;
