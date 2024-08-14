import { useState,useEffect } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

  const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);

    console.log(selectedCountries.length);
    

    const handleSelectedCountries = (country)=>{
        // console.log(`${country.name.common} Visited `);
        const newSelecetCountries = [...selectedCountries, country];
        setSelectedCountries(newSelecetCountries);
        
    }

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then((res)=>res.json())
    .then((data)=> setCountries(data));
  },[])

  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      <div>
        <h2>Selected Countries: {selectedCountries.length}</h2>
        <ul>
            {
                selectedCountries.map(selected => <li key={selected.car.cca2}>{selected.name.common}</li>)
            }
        </ul>
      </div>
      <div className="country-container">
      {
        countries.map((country)=> <Country key={country.car.cca2} country={country} handleSelectedCountries={handleSelectedCountries}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;
