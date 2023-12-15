import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../componant/navBar'

function Layout() {
  // const bgImg="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))"

  return (
        <div className=' w-full h-screen flex flex-col font-enraSlabVariable'>
            {/* Header */}
            <div className='h-[65px] md:h-[75px] fixed w-full z-10 bg-white' >
              <NavBar/>
            </div>
            <div className='grow'>
             <Outlet />
            </div>
            {/* footer */}
            <div>footer</div>    
        </div>
  )
}

export default Layout