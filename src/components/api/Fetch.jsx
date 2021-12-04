import axios from "axios";

export const BASE_URL='https://movies-tvshows-data-imdb.p.rapidapi.com/'

  
export const Fetch=async(url)=>{
    const response=await axios(url,{
        method:"GET",
        params:{type: 'get-movies-by-title', title: 'matrix'},
        headers: {
            'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
            'x-rapidapi-key': '86ead66609msha030fa5ce921823p102187jsnd3717224c74b'
        },
    })
    console.log(response)
    return response;
      
}