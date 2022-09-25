import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/nanaimo?unitGroup=metric&include=current&key=";
const API = "42P7BL6VJWMM8PJJMUHAKS97J&contentType=json"


function App() {

  const [celcius, setCelcius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);



  async function weather(e) {
    e.preventDefault();
    try {
      const address = URL + API;
      const response = await fetch(address);

      if (response.ok) {
        const json = await response.json();
        console.log(json.days[0].temp);

        setCelcius(json.days[0].temp);
      } else {
        alert("Error retrieving temperature.");
        console.log(response);
      }
    } catch (err) {
      alert(err);
    }

    

      

    }

  
    function handleSubmit(e) {
      e.preventDefault();
      
  
      setFahrenheit((celcius*1.8)+32)
  
    }
  


  




  return (
    <div style={{ margin: '30px' }}>
      <form onSubmit={weather}>
        <h3>Kotikaupunkini Nanaimon sää tänään</h3>

        <button type='button' onClick={weather}>Näytä sää</button>
        <div>
          <output>{celcius.toFixed(2)} C</output>
        </div>
      </form>
      <form onSubmit={handleSubmit}>
      <button type='button' onClick={handleSubmit}>Muuta C to F</button>
        <div>
          <output>{fahrenheit.toFixed(2)} F</output>
        </div>
        </form>
    </div>
    
  );
}

export default App;
