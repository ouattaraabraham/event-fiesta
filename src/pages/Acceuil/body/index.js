/* eslint-disable no-unused-vars */
import React from 'react'
import { useState , useEffect } from 'react';
import { useSearchParams , Link} from 'react-router-dom';
import { useSelector ,useDispatch } from 'react-redux';

import {AiOutlineHeart,AiOutlineShareAlt,AiFillLeftCircle,AiFillRightCircle } from "react-icons/ai";

import {data} from '../../../Data/index'

import Filter from '../filter'
import Card from '../card'

import { SlBasketLoaded} from 'react-icons/sl';

import PaginationControls from './pagination'
import ScrollToTop from '../../../componant/scrollToTop';

import {fcUpdData} from '../../../store/updDataSlider'



function Index() {

  const selectedVille= useSelector((state)=>state.filter.selectedVille)

  const selectedTEvent= useSelector((state)=>state.filter.selectedTEvent)

  const selectedQuartier= useSelector((state)=>state.filter.selectedQuartier)

  const selectedTLieux= useSelector((state)=>state.filter.selectedTLieux)

  const selectedHebergement= useSelector((state)=>state.filter.selectedHebergement)
  // console.log("selectedHebergement :"+selectedHebergement.value);

  const favorites= useSelector((state)=>state.favorites)

  const UpData= useSelector((state)=>state.updData)

  const dataStart=useSelector(state=>state.dataStart)




  const dispatch=useDispatch()

  const setData=(upd)=>{
    dispatch(fcUpdData(upd))
  }


   const [filterFocus,setFilterFocus] =useState(true)
 
     const toggleFilter =()=>{
      return setFilterFocus(prev=>!prev)
      }
 


  const [favoris , setFavoris] = useState([])

  const handlerAddFavoris=(items)=>{
    const lieux= favoris.find(item=>item===items)

  if(lieux){
    setFavoris(favoris.filter(item=>item!==items))
  }else{
    setFavoris([...favoris,items])
  }
}



  // const [list,SetList]=useState(data)
  const [show,setShow]=useState(false)


  let [searchParams, setSearchParams] = useSearchParams();

 const page=searchParams.get('page') ??'1'
  const items_page =searchParams.get('items_page') ??'10'
  const start=(Number(page)-1)*(Number(items_page))
  const end=start+ Number(items_page)

  const sliceData=UpData.slice(start,end)



  // const favorites= useSelector((state)=>state.favorites)

  const [scrollValue, setScrollValue]=useState(false)

const applyFilter=()=>{
  let updateData=dataStart


   if(selectedVille){
    updateData = updateData.filter((item)=>item.ville===selectedVille.name)
   }

   if(selectedTEvent){
    updateData = updateData.filter((item)=>item.evenement===selectedTEvent.name)
   }

    if(selectedQuartier){
      updateData = updateData.filter((item)=>item.quartier===selectedQuartier.name)
     }

    if(selectedTLieux){
      updateData = updateData.filter((item)=>item.Type_de_Lieux===selectedTLieux.name)
   }

   if(selectedHebergement){
    updateData=(selectedHebergement.name==="oui")?updateData =updateData.filter((item)=>item.hebergement==="oui")
    : updateData =updateData.filter((item)=>item.hebergement)
     
 }


   return setData(updateData) 


}

    //props
  const propsApp={filterFocus,toggleFilter,handlerAddFavoris,favoris}
  const propsMain={filterFocus,toggleFilter,handlerAddFavoris,favoris}
  useEffect(()=>{

    applyFilter()
    
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener('scroll', function (e) {

      // Get the new Value
      currentScrollPosition = window.pageYOffset;
      if(window.pageYOffset>410){
        setShow(true);
      }
      if(window.pageYOffset<410){
        setShow(false);
      }

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        // alert("scrol down")
        setScrollValue(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        // alert("scrol up")
        setScrollValue(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  },[selectedVille,selectedTEvent,selectedTLieux,selectedQuartier,selectedHebergement])
  
  
  return (
    <div name='body' className='px-4 pb-[24px] lg:px-5 lg:py-[24px]'>
     {/* header img de block  */}
     <ScrollToTop/>
      <div >
        <div>
          {/* Filter for filter Lieux */}
          <div className='px-1  py-6  lg:py-0 ' >
            <div className='flex justify-between pb-6 lg:py-2 gap-2 items-center'>
                <div>
                <Filter style={style1}  propsMain={propsMain}/>
                </div>
                
                {/* panier */}
                <div className=''>
                  <Link to="Favories">
                    <div  className="relative max-w-fit lg:top-3 flex justify-between items-center  gap-1   px-2 py-[.8px]   border-[1.5px]  rounded-lg border-rose-500 ">
                        <span>
                          <SlBasketLoaded size={25} className=' py-1 m-1'/>
                        </span>
                        <span>{favorites.length}</span>
                    </div>
                  </Link>
                </div>
            </div>

            {/* scroll to fixed Filter */}
            {
              
              show && !propsApp.active ?
              ( <div className={`w-full fixed z-10 flex gap-2 items-center  justify-between  bg-white border-2 py-2 lg:py-0 px-4 left-0 ${!scrollValue?"top-0":"top-[4em] "}`}>
                <Filter style={style2}  propsMain={propsMain}/>
                <Link to="Favories">
                  <div  className=" relative lg:top-3 px-2 py-[.8px] border-[1.5px] rounded-lg border-rose-600  flex gap-1 justify-between items-center  w-max">
                      <SlBasketLoaded size={25} className='py-1 m-1 '/>
                      <span>{favorites.length}</span>
                  </div>
                </Link>

            </div>):""
            }
            {/* lenght resultats map */}
            <div className='px-1 lg:py-5'>
            <span>{UpData.length} résultats</span>
            </div>
          </div>
     
          {/* container  Lieux */}
       <div >
        <div className='relative  flex flex-col  sm:grid sm:gap-6 sm:grid-cols-2  lg:grid-cols-3 '>
          {
            sliceData.map((item,index)=>(
              <Card item={item} keys={index} />
            ))    
          }
          </div>
          {/* pagination */}
          
          <div>
            <PaginationControls list={UpData} displayPrev={start>0} displayNex={end<UpData.length}/>
          </div>
        </div> 
        </div>
      </div>
    </div>
  )
}
const style1={
  divContainer:"",
  btn:"flex justify-between items-center gap-1 py-1 px-3   w-max border-[1.5px]  rounded-lg border-rose-600"
}
const style2={
  divContainer:"",
  btn:"flex justify-between items-center gap-1  py-1 px-3 w-max border-[1.5px] rounded-lg border-rose-600"
}

export default Index