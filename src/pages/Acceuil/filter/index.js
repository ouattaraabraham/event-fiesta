/* eslint-disable no-undef */
import React ,{ useState  }  from 'react'
import { useDispatch } from 'react-redux';

import {AiOutlineClose} from 'react-icons/ai'
import {FcFilledFilter} from 'react-icons/fc'
import Selecteds from '../selecteds';


import {resetAllState} from '../../../store/filterSlice'


export default function Filter({style,propsMain}) {


const [focus,SetFocus] =useState(true)

const isOpen =()=>{
  console.log("style :"+style);
  SetFocus(prev=>!prev)
  }

  const dispatch=useDispatch()
  const resetAllStates =()=>{
    dispatch(resetAllState())
  }
  

  return (
    <div className={`${style.divContainer}`}>
         {/* btnIsOpen */}
         <div className='flex p-3 justify-between lg:hidden'>
              <button  onClick={propsMain.toggleFilter}  className={`${style.btn}`}>
                <span><FcFilledFilter size={'16px'}/></span>Filter
              </button>
              
        </div>

        {/* filterGroupSelect lg: */} 
        <div className='hidden lg:block '>
                  <Selecteds />
        </div>
    
        {/* filterGroupSelect md: */}
        {
          (!propsMain.filterFocus?(
           <div className='fixed top-0 left-0 flex flex-col h-screen   bg-slate-700 w-full lg:hidden z-50'>
             {/*BtnClose */}
              <div className='  bg-slate-100 text-lg text-slate-900 flex justify-between p-3 border-2 gap-x-3'>
                <span>Filter</span>
                  <button onClick={propsMain.toggleFilter}>
                  <AiOutlineClose/>
                  </button>
              </div>
                
                {/* layout Mobile*/}
                <div className='grow bg-slate-50 overflow-hidden overflow-y-scroll '>
                  <Selecteds />
                </div>

             <div className=' bg-slate-100 flex justify-between p-3 border-2 gap-x-3  md:hidden'>
                  <button onClick={resetAllStates} className=' border-2 px-3 py-1 rounded-lg grow'>
                     Effacer
                  </button>
                  <button onClick={propsMain.toggleFilter}   className='bg-red-300 px-3 py-1 rounded-lg grow'>
                     Voir les résultats
                  </button>
             </div>
          </div> 
        ):'' )
        }
    </div>
    )
    
}

// export default FilterContainer