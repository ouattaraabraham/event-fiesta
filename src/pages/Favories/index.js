import React from 'react'
import { useSelector } from 'react-redux';
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
      
        <h1 className='text-center text-lg bg-red-400 rounded-lg py-2	my-5'>Vos lieux favory</h1>
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