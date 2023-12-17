import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/logoEvent.png'

function navBar() {

  return (
    <div className=' w-full px-4  lg:px-10 my-auto' >
        <div className='flex justify-between md:text-lg'>
        <div className='w-[4rem] '>
          <img className='w-full ' src={logo} alt="logo" />
        </div>
         <ul className='flex items-center' >
            <li><NavLink to='/'>Acceuil</NavLink></li>
            {/* <li><NavLink to='/connexion'>Contacter</NavLink></li>                */}
         </ul>
        </div>
    </div>
  )
}

export default navBar