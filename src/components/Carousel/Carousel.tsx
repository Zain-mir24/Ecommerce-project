import React from 'react'
import { featuredImages } from './carouselimages'
export const Carousel:React.FC =()=> {
  return (
    <div className=' flex items-center h-[440px] '>
      <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
      {featuredImages.map((item)=>{
        return(
          <img 
          className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105'
          src={item}
          alt="/"
          />)
                })}
      </div>
    </div>


  )
}

