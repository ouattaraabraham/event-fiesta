import React , {useState}  from 'react'
import Body from './body'

function Index() {
  const bgImg="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('../fete.jpg')"

  return (
    <div name='acceuil'>
      {/* header */}
      <div className='w-full'>
        <div className='text-white flex justify-center py-[70px] lg:py-[150px] bg-cover bg-center h-full w-full' style={{backgroundImage: bgImg}} >
           <div>Trouver les meilleurs lieux</div>
        </div>
      </div>
      <Body/>
    </div>

  )
}

export default Index