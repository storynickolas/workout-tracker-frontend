import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [workOut, setWorkOut] = useState([])
  const [options, setOptions] = useState([])
  const [page, setPage] = useState(1)
  const [sunday, setSunday] = useState('Test')
  const [monday, setMonday] = useState('Test')
  const [tuesday, setTuesday] = useState('Test')

  useEffect(() => {
    fetch(`http://localhost:9292/${page}`)
      .then((r) => r.json())
      .then((data) => setWorkOut(data))
  }, [page])

  useEffect(() => {
    fetch(`http://localhost:9292/workout`)
      .then((r) => r.json())
      .then((data) => setOptions(data))
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

  function handleSelect(e) {
    e.preventDefault();
    let newState = e.target.value
    setSunday(newState)
  }

  return (
    <div className="App">
      <header className="App-header">
        <select onChange={handleSelect}>
              {
                options.map(abrev => {
                  return (
                    <option key={abrev.id} value={abrev.name}> {abrev.name} </option>
                )
              })
            }
        </select>
        <p>{sunday}</p>
        <p>{monday}</p>
        <p>{tuesday}</p>
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
