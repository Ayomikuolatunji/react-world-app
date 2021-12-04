import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import { FetchName } from './FetchApi';
import Slide from 'react-reveal/Slide';


export default function SingleCountry() {
    const [country, setcountry] = useState([]);
    const {name}=useParams()



  
    useEffect(() => {
        const FetchedName=async()=>{
            try {
                const response=await FetchName(name)
                setcountry(response)
            } catch (error) {
                
            }
        }
        FetchedName()
    },[name])
    return (
        <div className="container">
          {country.map(single=>{
              const {name,flag,population,capital,borders,currencies,region,subregion,languages,area,timezones}=single
              return(
                <div key="numericCode">
                    <div className="row  mt-5">
                        <div className="col-md-6">
                        <Slide left>
                        <img src={flag} alt={name} className="img-fluid border"/>
                            <div className="info-border">
                            <h1>{`${borders.length>0?"Borders countries:" : "No border countries"}`}</h1>
                              <p>
                                {borders.map(border=>{
                                    return <span key={border}>{border}</span>
                                })}
                              </p>
                            </div>
                        </Slide>
                        </div>
                        <div className="col-md-6 mt-2">
                        <Slide right>
                           <div className="info">
                             <h1>Contry Name: <span>{name}</span></h1>
                           </div>
                           <div className="info">
                             <h1>Recent Population:<span>{population.toLocaleString()}</span></h1>
                           </div>
                           <div className="info">
                             <h1>Land mass:<span>{area.toString()}sqm</span></h1>
                           </div>
                           <div className="info">
                             <h1>National Capital:<span>{capital}</span></h1>
                           </div>
                           <div className="info">
                             <h1>Region: <span>{region}</span></h1>
                           </div> 
                           <div className="info">
                             <h1>SubRegion: <span>{subregion}</span></h1>
                           </div>                          
                            <div className="info">
                             <h1>Currencies:{currencies.map(currency=>{
                                 return <span key={currency.code}>{currency.name}</span>
                             })}</h1>
                           </div> 
                           <div className="info">
                             <h1>languages:{languages.map(language=>{
                                 return <span key={language.name}>{language.name}</span>
                             })}</h1>
                           </div>
                           <div className="info">
                             <h1>timezones:{timezones.map(timezone=>{
                                 return <span key={timezone}>{timezone}</span>
                             })}</h1>
                           </div>      
                         </Slide>
                        </div>
                    </div>
                </div>
              )
          })}
        </div>
    )
}
