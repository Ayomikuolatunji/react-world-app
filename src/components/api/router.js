import React, { useEffect } from 'react'
import { Fetch,BASE_URL } from './Fetch';


export default function Get() {
    const Data=async()=>{
        const res=await Fetch(`${BASE_URL}`);
        console.log(res)
       }
    useEffect(()=>{
        Data()
    })

    return (
        <div>
            
        </div>
    )
}
