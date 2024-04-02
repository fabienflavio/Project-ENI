import React from 'react'
import { PiBankFill } from "react-icons/pi";
import { Link  } from 'react-router-dom'

export default function Header() {
  return (
    <div className='Container_header'>
        <div className='logo'>
         <span><PiBankFill style={{
                fontSize: 80,
                color: "white",
                margin: 5,
            }}/>
            </span>
           
        </div>
        <div className='Nav'>
            <Link to="/" >Accuielle</Link>
            <Link to="/Histogramme" >Histogramme</Link>
            <Link to="/Affichage" >Affichage</Link>
        </div>
    </div>
  )
}
