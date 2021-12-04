import React, { Component,createContext } from 'react';
import { FetchData } from './FetchApi';
import "./All.css";
import Loading from "./Loading"





export const CountriesContext=createContext()

class CountryApi extends Component {
    constructor(){
        super()

        this.state={
            countries:null,
            search:"",
            region:""
        }
    }
     componentDidMount(){
      this.getCountries();
    }
    getCountries=async()=>{
        try {
            const response=await FetchData();
            this.setState({countries:response})
        } catch (error) {
            console.log(error)
        };
    };
    onSearchCountry=(e)=>{
        this.setState(()=>{
                return{
                  search:e.target.value,
                  region:e.target.value
                }
        }); 
    };
    removeContry=(name)=>{
        const itemRemove=this.state.countries.filter((tour)=> tour.name !==name);
        this.setState({
            countries:itemRemove
        })
    }
    render() {
        if(!this.state.countries){
            return <Loading/>
        };
        const filteredSearch=this.state.countries.filter(country=>{
            if(country.name.toLowerCase().includes(this.state.search.toLowerCase()) 
            || country.subregion.toLowerCase().includes(this.state.search.toLowerCase())){
                return country
            }
            if(country.region.toLowerCase().includes(this.state.region.toLowerCase())){
                return country
            };

            return null;
        });

        
        return (
            <>
              <CountriesContext.Provider value={{
                  ...this.state,
                  filteredSearch,
                  onSearchCountry:this.onSearchCountry,
                  removeContry:this.removeContry
              }}>
                 {this.props.children}
              </CountriesContext.Provider>
            </>
        );
    };
};

export default CountryApi;
