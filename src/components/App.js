import React from 'react';
import {Switch,Route} from "react-router-dom"
import AllCountries from './AllCountries';
import Header from './Header';
import SingleCountry from './SingleCountry';




export default function App() {
    return (
        <>
           <Header/>
           <Switch>
               <Route path="/" exact component={AllCountries}/>
               <Route path="/countries/:name" children={<SingleCountry/>}/>
           </Switch>
        </>
    )
}
