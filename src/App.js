import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [workOut, setWorkOut] = useState([])
  const [options, setOptions] = useState([])
  const [page, setPage] = useState(1)
  const [sunday, setSunday] = useState([])
  const [monday, setMonday] = useState(['Test', 'Test2', 'Test3'])
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
    let newState = options[e.target.value - 1].exercises
    setSunday(newState)
  }

  return (
    <div className="App">
      <header className="App-header">
        <select onChange={handleSelect}>
              {
                options.map(abrev => {
                  return (
                    <option key={abrev.id} value={abrev.id}> {abrev.name} </option>
                )
              })
            }
        </select>
        <div>{sunday.map(abrev => {
          return (
            <p key={abrev.name}>{abrev.name}</p>
          )
        })}</div>
        <p>{monday}</p>
        <p>{tuesday}</p>
        {
          workOut.map((item) => (
            <p key={item.name}>{item.name}</p>
         ))
        }
        <button onClick={() => handleClick()}></button>
      </header>
      <body>
        <table>
            <thead>
            <tr>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>TEXT1</td>
            </tr>
            <tr>
                <td>TEXT2</td>
            </tr>
            </tbody>
        </table>
      </body>
    </div>
  );
}

export default App;
