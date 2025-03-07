import { useEffect, useState } from 'react';
import './App.css';
import { getData } from './WeatherService.js'; 

function App() {
  useEffect (() => {
    const getData = async () => {
      const APIKEY = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=New+York&appid=${APIKEY}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data); 

    } catch(error) {
      console.error(error.message);    
    }
  };

  getData();
}, [])
return (
  <div className="App">
    <header className="App-header">
      <h1>Weather</h1>
    </header>
  </div>
);
}

const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <p>Current Count {count}</p>
        <button type='button' onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
      </header>
    </div>
  );

export default App;



 

