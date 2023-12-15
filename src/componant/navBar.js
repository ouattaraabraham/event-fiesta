import React from 'react'
import { NavLink } from 'react-router-dom'

function navBar() {

  return (
    <div className=' w-full px-4 py-[24px] lg:px-10 my-auto' >
        <div className='flex justify-between md:text-lg'>
         <div>Event fiesta</div>
         <ul className='flex gap-5'>
            <li><NavLink to='/'>Acceuil</NavLink></li>
            <li><NavLink to='/connexion'>Contacter</NavLink></li>               
         </ul>
        </div>
    </div>
  )
}

export default navBar