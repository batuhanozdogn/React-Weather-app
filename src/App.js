import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import City from './City';

function App() {
  const key = "e7744a8ac47c099fda3cf7e59729e528";
  const [search, setSearch] = useState(""); // Boş dize kullanımı
  const [city, setCity] = useState();
  
  useEffect(() => {
    async function getApi() {
      try {
        if (search) { // Sadece search boş değilse API çağrısı yap
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
          console.log(response);
          setCity(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  
  console.log(search);
  
  return (
    <div className="App">
      <div>
        <div className="mb-3 pt-0">
          <input 
            onChange={(e) => setSearch(e.target.value)}
            type="text" 
            placeholder="Enter city name" 
            className="px-3 w-full py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" 
          />
          <City city={city} /> {/* Bileşen adı büyük harfle başlamalı */}
        </div>
      </div>
    </div>
  );
}

export default App;
