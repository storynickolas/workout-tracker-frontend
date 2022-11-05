import './App.css';
import React from 'react';
import Day from './Components/Day';


function App() {

  return (
    <div className="App">
      <header className="App-header">

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
                <td>
                  <Day />
                </td>
                <td>
                  <Day />
                </td>
                <td>
                  <Day />
                </td>
            </tr>
            </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
