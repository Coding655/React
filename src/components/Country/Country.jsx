import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountries}) => {
    const {name, flags, cca3, capital,region,population,startOfWeek } = country;
    // console.log(country)
    const [visited, setVisited] = useState(false);
    const handleMarkBtn = () => {
        setVisited(!visited)
    }
   const setParams = ()=>{
    handleVisitedCountries(country)
   }
    // console.log(handleVisitedCountries)
    
    return (
        <div className={`border mark ? ${visited ? 'visited' : 'non-visited'}`}>
            <h3>Name: {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Code: {cca3}</p>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <p>Start Of Week: {startOfWeek}</p>
            <br />

            <div className='btn'>
            <button onClick={handleMarkBtn} >{visited ?  'visited' : 'going'}</button>
            <button onClick={setParams} >Mark as visited</button>
            </div>
            <br />
            <p className='text'>{visited ?  'i already visit this country' : 'i want to visit' }</p>
            
            
        </div>
    );
};

export default Country;