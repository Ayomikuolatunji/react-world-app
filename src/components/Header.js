import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {FaMoon,ImEarth} from 'react-icons/all';
import Zoom from 'react-reveal/Zoom';

export default function Header() {


   useEffect(()=>{
    const moon=document.querySelector(".moon");
    moon.addEventListener("click",()=>{
      document.body.classList.toggle("light-theme")
    })
    return ()=>{
      moon.removeEventListener("click",()=>{
        document.body.classList.toggle("light-theme")
      })
    }
   })
    return (
      <div className="container">
        <Zoom>
          <div className="header">
              <Link to="/" className=" text-decoration-none">
                <ImEarth className="world"></ImEarth>
              </Link>
               <div>
               <Link to="/" className=" text-decoration-none">
                <h1>World Countries And Infomation</h1>
              </Link>
              <br />
              <a href="https://github.com/Ayomikuolatunji/react-world-app">Designed by Ayomiku Olgit atunji</a>
               </div>
              <FaMoon className="moon"></FaMoon>
         </div>
        </Zoom>
      </div>
    )
}
