import React from 'react';
import { Link } from 'react-router-dom';
import { CountriesContext } from './Countries';
import Slide from 'react-reveal/Slide';
import SearchCountry from "./SearchCountry";


export default function AllCountries() {
    
    return (
       <div className="container">
            <SearchCountry/>
          <CountriesContext.Consumer>
            {value=>{
                return(
                    <div className="my-2 found">
                       <h2>{value.filteredSearch.length} countries found</h2>
                     </div>     
                ) 
            }}
          </CountriesContext.Consumer>
          <div className="countries">
          <CountriesContext.Consumer>
                {value=>{
                    return value.filteredSearch.map((country,index)=>{
                        const {flag,name,region,gini,population,capital}=country
                        return(
                        <Slide bottom key={index}>
                            <div className="country m-2" >
                                <Link to={`/countries/${name}`}>
                                        <img src={flag} alt={name}/>
                                    </Link>
                                <div className="px-3">
                                    <Link to={`/countries/${name}`}>
                                        <h1>{name}</h1>
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-between px-3">
                                    <h4>capital:</h4>
                                    <h3>{capital}</h3>
                                </div>
                                <div className="d-flex justify-content-between px-3">
                                    <h4>Region:</h4>
                                    <h3>{region}</h3>
                                </div>
                                <div className="d-flex justify-content-between px-3">
                                    <h4>population:</h4>
                                <h3>{population.toLocaleString()}</h3>
                                </div>
                                <div className="d-flex justify-content-between px-3">
                                    <h4>Gini:</h4>
                                    <h3>{`${ gini || "0"}`}%</h3>
                                </div>
                                <div className='px-3 mb-2'>
                                    <button onClick={()=>value.removeContry(name)}className='btn btn-outline-primary'>Remove country</button>
                                </div>
                            </div>
                        </Slide>
                           
                        )
                    })
                }}
           </CountriesContext.Consumer>
          </div>
       </div>
    )
}

