import axios from "axios"

export const FetchData=async()=>{

       try {
           const {data}=await axios.get("https://restcountries.com/v2/all");
           return data;
       } catch (error) {
           console.log(error)
       }
}


// searched by name
export const FetchName=async(name)=>{
    try {
        const {data}=await axios.get(`https://restcountries.com/v2/name/${name}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}

