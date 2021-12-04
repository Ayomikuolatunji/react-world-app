import React,{useContext} from 'react';
import { CountriesContext } from './Countries';



export default function SearchCountry() {
    const {onSearchCountry}=useContext(CountriesContext)
    return (
        <div className="container">

            <CountriesContext.Consumer>
            {value=>{
              return(
                <div className="header-input ">
                     <input type="text" className="text-center" onChange={value.onSearchCountry} placeholder="search by name,region..."/> 
                    <select className="form-select" onChange={onSearchCountry}>
                        <option value="">Select By Region</option>
                        <option value="africa">Africa</option>
                        <option value="america">Americans</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
               )
           }}
            </CountriesContext.Consumer>
        </div>
    )
}
