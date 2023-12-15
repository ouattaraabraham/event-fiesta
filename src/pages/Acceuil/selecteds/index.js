import React from 'react'
import {AiFillSketchCircle } from "react-icons/ai"
import { useSelector , useDispatch } from 'react-redux';
import Selected from './selected'

import {changeVille ,changeTEvent,changeQuartier ,changeTLieux,changeHebergement} from '../../../store/filterSlice'


// {selectedVille,handlerChangeVille,selectedTEvent,handlerChangeTEvent,selectedQuartier,handlerChangeQuartier,selectedTLieux,handlerChangeTLieux,selectedHebergement,handlerChangeHebergement}
function FilterWrap() {
     
  const selectedVille= useSelector((state)=>state.filter.selectedVille)

  const selectedTEvent= useSelector((state)=>state.filter.selectedTEvent)

  const selectedQuartier= useSelector((state)=>state.filter.selectedQuartier)

  const selectedTLieux= useSelector((state)=>state.filter.selectedTLieux)

  const selectedHebergement= useSelector((state)=>state.filter.selectedHebergement)

  // console.log("selectedHebergement :"+selectedHebergement.);

  const dispatch=useDispatch()

  const handlerChangeVille =(item)=>{
    dispatch(changeVille(item))
  }

  const handlerChangeTEvent =(item)=>{
    dispatch(changeTEvent(item))
  }

  const handlerChangeQuartier =(item)=>{
    dispatch(changeQuartier(item))
  }

  const handlerChangeTLieux =(item)=>{
    dispatch(changeTLieux(item))
  }

  const handlerChangeHebergement =(item)=>{
    dispatch(changeHebergement(item))
  }



      const  villes= [
        {
          id: 1,
          name: 'Abidjan',
          label: 'ville ?',
        },
        {
          id: 2,
          name: 'Daloua',
        },
        {
          id: 2,
          name: 'Bouake',
        },
        {
          id: 2,
          name: 'Yamoussoukro',
        }
      ]

      const quartier = [
        {
          id: 2,
          name: 'Assinie',
          label: 'Quartier?',
        },
        {
          id: 1,
          name: 'Abobo',
        },
        {
          id: 2,
          name: 'Bingerville',
        },
        {
          id: 2,
          name: 'Cocody',
        },
        {
          id: 2,
          name: 'Koumassi',
        },
        {
          id: 2,
          name: 'port-bouet',
        },
        {
          id: 2,
          name: 'Marcory',
        },
        {
          id: 2,
          name: 'Yopougon',
        },
        {
          id: 2,
          name: 'Bassam',
        },
        {
          id: 2,
          name: 'Plateau',
        },
      
      ]

        const TypeEvent = [
            {
              id: 1,
              name: 'Annivaisere',
              avatar:
              <AiFillSketchCircle/>,
              label:'Evenement',
            },
            {
              id: 2,
              name: 'Mariage',
              avatar:
              <AiFillSketchCircle/>,
            },
            {
              id: 3,
              name: 'Soirée Privée',
              avatar:
              <AiFillSketchCircle/>,
            },
            {
              id: 4,
              name: 'Entreprise',
              avatar:
              <AiFillSketchCircle/>,
            },
           
          ]


        const TypeLieux = [
          {
            id: 1,
            name: 'Appartement',
            avatar:
            <AiFillSketchCircle/>,
            label:'Type(s) de Lieux ?',
          },
          {
            id: 2,
            name: 'Atelier',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 3,
            name: 'Boutique',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 4,
            name: 'Cave',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 5,
            name: 'Espace avec exterieur',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 6,
            name: 'Espace avec cusine',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 7,
            name: 'Espace avec picine',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 8,
            name: 'Hotel',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 9,
            name: 'Jardin',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 10,
            name: 'restaurent',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 11,
            name: 'loft',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 12,
            name: 'Maison',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 13,
            name: 'Villa',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 14,
            name: 'Terrasse',
            avatar:
            <AiFillSketchCircle/>,
          },
        ]

        const Hebergement=[
          {
            id: 1,
            name: 'non',
            value:false,
            label:'Hébergement',
          },
          {
            id: 2,
            name: 'oui',
            value:true,
            label:'Hébergement',
          },

        ]
    
      
  return (
    <div className='relative  flex flex-col gap-4 p-4 md:flex-row'>

       <Selected NameSelect={'region'} data={villes} selected={selectedVille} handlerChange={handlerChangeVille}/>

        <Selected NameSelect={'Type evenemt'} data={TypeEvent} selected={selectedTEvent} handlerChange={handlerChangeTEvent}/>

        <Selected NameSelect={'Quartier'} data={quartier} selected={selectedQuartier} handlerChange={handlerChangeQuartier}/>
  
        <Selected NameSelect={'Type lieux'} data={TypeLieux} selected={selectedTLieux} handlerChange={handlerChangeTLieux}/>
     
        <Selected NameSelect={'Hebergement'} data={Hebergement} selected={selectedHebergement} handlerChange={handlerChangeHebergement}/>
       

    </div>
  )
}

export default FilterWrap