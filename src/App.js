import './App.css';
import React from 'react';
import Day from './Components/Day';


function App() {

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return (
    <div className="App">
      <header className="App-header">
        <table>
            <thead>
            <tr>
              {
                days.map((item) => (
                  <th key={item}>{item}</th>
                ))
              }
            </tr>
            </thead>
            <tbody>
              <tr>
                {
                  days.map((item) => (
                    <td key={days.indexOf(item)}><Day /></td>
                  ))
                }
              </tr>
            </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
