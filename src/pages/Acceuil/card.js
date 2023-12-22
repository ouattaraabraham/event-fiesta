import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import ScrollToTop from '../../componant/scrollToTop'
import {AiOutlineHeart,AiFillHeart ,AiOutlineShareAlt,AiFillLeftCircle,AiFillRightCircle } from "react-icons/ai";
import {BsFillPeopleFill } from "react-icons/bs";
import {TbPointFilled , TbPoint } from "react-icons/tb";
import {AiOutlineClose} from 'react-icons/ai'


import {toggleLieux} from '../../store/lieuxFavoriSlice'

import {toggleLikeStart} from '../../store/dataStartSlider'

import {toggleLike} from '../../store/updDataSlider'




// import state redux-react
// import {toggleLieux} from '../../../store/lieuxFavoriSlice'




function CardLieux({item,toggleFavory}) {
  // console.log("item.adapter :"+item.adapter[1]);

  // const [btnLike , setBtnLike]=useState(false)

    const dispatch=useDispatch()

    const toggleFavori =(item)=>{
      dispatch(toggleLikeStart(item))
      dispatch(toggleLike(item))
      // setBtnLike((e)=>!e)
      dispatch(toggleLieux(item))
    }

    // const like= btnLike?"blue":"red"



    const [showTxt,setShowTxt]=useState(true)

    const handlerShowTxt=()=>{
      setShowTxt((e)=>!e)
    }

    const heightTxt=showTxt?"h-72":""
    const txtBtnshowTxt=showTxt?"en voir plus":"voir moin"

    const [detail , setDetail]=useState(false)
 
    const handlerDetail=()=>{
        setDetail((e)=>!e)
    }


  // for block normal
  const [curentImg, SetCurentImg] =useState(0)

  const prevImg=()=>{
    const borne= curentImg===0 
    const changeIndex=borne ? item.img.length-1 :curentImg-1
    return SetCurentImg(changeIndex)
  }
  const nexImg=()=>{
    const borne= curentImg===item.img.length-1
    const changeIndex=borne ? 0:curentImg+1
    return SetCurentImg(changeIndex)
 }

 // for block detail

 const [curentImgDetail, SetCurentImgDetail] =useState(0)

 const prevImgDetail=()=>{
  const borne= curentImgDetail===0 
  const changeIndex=borne ? item.img.length-1 :curentImgDetail-1
  return SetCurentImgDetail(changeIndex)
 }
 const nexImgDetail=()=>{
  const borne= curentImgDetail===item.img.length-1
  const changeIndex=borne ? 0:curentImgDetail+1
  return SetCurentImgDetail(changeIndex)
}

  return (
    <div>
    
     {/* wrpa-IMG */}
      <div  className='relative cursor-pointer'>
          <img onClick={handlerDetail}  className='w-full h-full object-cover rounded-xl' src={item.img[curentImg]} alt="imageLieux" />
        {/* btn-left-right */}
        <button className='absolute max-w-max p-5 top-[35%]'>
        <AiFillLeftCircle  onClick={prevImg} size={30} className='m-3'/>
        </button>
        <button className='absolute max-w-max  w-full  p-5 top-[35%] right-0'>
        <AiFillRightCircle onClick={nexImg} size={30} className='m-3'/>
        </button>
        <div className='absolute w-full bottom-5 flex justify-center'>
        {
          item.img.map((item,index)=>(
            <div>
             <TbPointFilled size={20} color={`${curentImg===index?"#fff":"#c3bebe"}`} key={index}/>  
            </div>
          ) )
        }
        </div>
      </div>

     {/* wrap-text */}
     <div className='px-4 pb-5 pt-3 flex flex-col gap-1 cursor-default'>
     <ScrollToTop/>
        <div className='flex  justify-between items-center'>
          <h1 className='text-lg text-slate-900	'>salle-{item.id}</h1>
        <div className='flex gap-4 cursor-pointer'>
          <span><AiOutlineShareAlt size={23}/></span>
          <button onClick={()=>toggleFavori(item)}>
          {item.like?<AiFillHeart size={23} color="red"/>:<AiOutlineHeart size={23} color="red"/> }
          </button>
        </div>
       </div>
        <div className='flex items-center'>
         <TbPointFilled/> 
         <h3>Abidjan , {item.quartier}</h3>
        </div>
        <div className='flex  justify-between items-center'>
        <h3> A partie de {item.prix}</h3>
        <div className='flex gap-4 items-center'>
          <span>{item.n_personne}</span>
          <span><BsFillPeopleFill size={20}/></span>
        </div>
        </div>
      </div>
       <div className="before:content-[''] w-36 h-[1px] mx-auto mb-9 mt-3 bg-slate-400 sm:hidden"> </div>
   

    {/* block detail */}
    {
        detail?(
         <div className=' fixed top-0 left-0 flex flex-col w-full h-screen  z-50'>
             {/*BtnClose */}
          <div className='relative mx-auto lg:m-auto'>
            <div className='bg-[#e9e9e9] relative w-full h-screen  lg:w-fit lg:h-fit   mx-auto '>
              {/* header */}
              <div className=' bg-[#f0f8ff] text-lg flex justify-between py-3 px-3 md:px-5 gap-x-3'>
                <div>
                  <div className='pl-1 flex gap-2'>
                      <span>salle-{item.id}</span>
                      {/* <button onClick={()=>handlerAddFavoris(item.id)}><AiOutlineHeart size={20} color='red'/></button> */}
                  </div>
                  <div className='flex items-center text-sm'>
                  <TbPointFilled/>
                  <h3>Abidjan , {item.quartier}</h3>
                  </div>
                </div>
                <button onClick={handlerDetail}>
                <AiOutlineClose/>
                </button>
              </div>
                {/* body detail */}
              <div className='  overflow-y-scroll h-[81vh]  lg:max-w-4xl lg:h-[430px] '>
                  {/* img */}
                  <div className=' relative m-auto md:max-w-lg lg:pt-4'>
                      <img className='w-full h-full object-cover md:rounded-xl' src={item.img[curentImgDetail]} alt="imageLieux" />
                      {/* btn-left-right */}
                      <button className='absolute max-w-max p-5 top-[45%]'>
                      <AiFillLeftCircle  onClick={prevImgDetail} size={30} className='m-3'/>
                      </button>
                      <button className='absolute max-w-max  w-full  p-5 top-[45%] right-0'>
                      <AiFillRightCircle onClick={nexImgDetail} size={30} className='m-3'/>
                      </button>
                      <div className='absolute w-full bottom-5 flex justify-center'>
                      {
                      item.img.map((item,index)=>(
                          <div>
                          <TbPointFilled size={20} color={`${curentImgDetail===index?"#fff":"#c3bebe"}`} key={index}/>  
                          </div>
                      ) )
                      }
                      </div>
                  </div>

                  {/* txt */}
                  <div  className="px-3 md:px-5 pb-10 lg:pb-24">

                  <div >
                      <div className={`${heightTxt} overflow-hidden`}>
                        <p className='pt-5'>
                        L'Habitation La Nau met à disposition une salle de réception au Saint-Esprit, dans un cadre champêtre de 3 hectares, avec hébergement pour événements privés : mariage, baptême, anniversaire...

                        Idéal pour vos évènements privés.

                        Notre salle de 400 m² pourra accueillir jusqu'à 500 personnes en format cocktail ou encore 300 personnes pour un repas assis !

                        Au niveau de la restauration, vous êtes libre de venir avec votre traiteur ou de gérer la restauration vous même, nous mettons à votre disposition un espace traiteur de 10 m².

                        Il est également possible de dormir sur place, vous trouverez 2 chambres doubles à l'Habitation La Nau.

                        Pour plus d'information concernant notre établissement, n'hésitez pas à demander un devis gratuit !
                        </p>
                        <p className='pt-5 '>
                        L'Habitation La Nau met à disposition une salle de réception au Saint-Esprit, dans un cadre champêtre de 3 hectares, avec hébergement pour événements privés : mariage, baptême, anniversaire...

                        Idéal pour vos évènements privés.

                        Notre salle de 400 m² pourra accueillir jusqu'à 500 personnes en format cocktail ou encore 300 personnes pour un repas assis !

                        Au niveau de la restauration, vous êtes libre de venir avec votre traiteur ou de gérer la restauration vous même, nous mettons à votre disposition un espace traiteur de 10 m².

                        Il est également possible de dormir sur place, vous trouverez 2 chambres doubles à l'Habitation La Nau.

                        Pour plus d'information concernant notre établissement, n'hésitez pas à demander un devis gratuit !
                        </p>
                      </div>
                      <button className=' py-4 underline' onClick={handlerShowTxt}>{txtBtnshowTxt}</button>
                  </div>

                  <div>
                    <p><span className='text-md'>a partie de</span> <span className='text-xl'>{item.prix} fcfa</span></p>
                  </div>

                  <div>
                    <p className='py-4 text-xl'>Lieux ideal pour</p>
                    <div className='flex flex-wrap gap-2 text-white'>
                    {
                      item.adapter.map(item=>
                        <span className='px-4 py-2 rounded-xl bg-[#413f3f]'>{item}</span>
                      )                         
                    }
                    </div>
                  </div>
                  </div>
              </div>
              {/* footer-detail */}
              <div className='bg-[#f0f8ff]  absolute w-full bottom-0 py-4 flex items-center justify-center md:justify-end '>
                <div className=' flex flex-wrap  justify-center md:justify-end px-2  gap-3 '>
                    <span onClick={()=>toggleFavori(item)}  className=' border border-black px-3 py-1 rounded-lg'>
                      ajouter au favory
                    </span>
                    <span  className='bg-red-300 px-3  py-1 rounded-lg '>
                       Demande devis
                    </span>
                </div>     
              </div>
            </div> 
          </div> 
          </div> ):''
      }

    </div>

  )
}

export default CardLieux