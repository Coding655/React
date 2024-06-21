import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
   

   useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    
   }, [])
   const handleVisitedCountries = country =>{
    console.log('add to visited countries')
    const newVisitedCountries = [...visitedCountries,country]
    setVisitedCountries(newVisitedCountries)
   }


    return (
        <div>
            <h4>Total Countries: {countries.length}</h4>
            <h4>Visited Countries: {visitedCountries.length} </h4>
            <ul>
              {
                visitedCountries.map(country => <li>
                  {country.name.common}
                </li>)
              }
            </ul>
          <div className="grid">
          {
                countries.map(country => <Country 
                  
                  handleVisitedCountries = {handleVisitedCountries}
                    key={country.cca3} country={country}></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;