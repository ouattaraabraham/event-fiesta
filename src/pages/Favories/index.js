import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineArrowLeft } from "react-icons/ai";

// import {data} from '../../Data/index'
import Card from './card'
import ScrollToTop from '../../componant/scrollToTop';


function Index() {
  const favorites= useSelector((state)=>state.favorites)


  return (
    <div name='favory' className='px-4 lg:px-5 pb-[24px] pt-[85px]'>
    
     <ScrollToTop/>
    {/* header img de block  */}
     <div >
     <div>
        <Link to="../">
        <div className='flex items-center gap-2 border w-min px-3 py-2'>
          <AiOutlineArrowLeft/>
          retour
        </div>
        </Link>
     </div>
        <h1 className='text-center text-2xl  rounded-lg py-2	my-5'>Vos lieux favory</h1>
          <div className='relative  flex flex-col  sm:grid sm:gap-6 sm:grid-cols-2  lg:grid-cols-3 '>
         {
          favorites.map((item,index)=>(
             <Card item={item} keys={index} />
           ))    
         }
         </div>
     </div>
   </div>
  )
}

export default Index