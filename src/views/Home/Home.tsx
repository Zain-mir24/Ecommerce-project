import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

import Men from "../../assets/MenFashion2.jpg"

import { Carousel } from 'react-responsive-carousel';
export const Home:React.FC=()=> {
  return (
    <div>
      <Navbar />   
      <div className=' flex 
      justify-center   items-center  mt-36 mx-auto '>
      {/* <-----6 boxes----> */}
      <div className=' grid grid-cols-3 gap-5 h-3/6'>
        <div className='w-64 flex flex-row rounded bg-blue-600  '>
          <div className='p-8 w-1/2'>
            <h1 className='text-white'>
              Mobile Phones
            </h1>
            <p className='text-white text-xs'> 
              Get 20% cashback
            </p>
            <button className='bg-orange-600 w-20 h-9 text-sm'>
          <span className="text-sm">
          Buy Now</span>  
            </button>
          </div>
          {/* Image */}
          <div>
            <img 
            className='h-full w-full rounded'
            src={"https://cdn.mos.cms.futurecdn.net/q5UfaGNrEwWgTWH2iUdKMU.jpg"} />
          </div>
        </div>
        <div  className='w-64'>
          <img  
          className='h-full w-full rounded'
          src={"https://embryo-react.theironnetwork.org/static/media/sports.87b1b256.jpg"}/>
        </div>
        <div  className='w-64'>
         <img 
         className='h-full w-full rounded'
         src={"https://embryo-react.theironnetwork.org/static/media/t-shirts.2d89c2da.jpg"}/>
        </div>
        <div  className='w-64'>
          <img  
          className='h-full w-full rounded'
          src={"https://embryo-react.theironnetwork.org/static/media/sports.87b1b256.jpg"}/>
        </div> 
      <div  className='w-64'>
          <img  
          className='h-full w-full rounded'
          src={"https://embryo-react.theironnetwork.org/static/media/sports.87b1b256.jpg"}/>
        </div>
       <div  className='w-64'>
          <img  
          className='h-full w-full rounded'
          src={"https://embryo-react.theironnetwork.org/static/media/sports.87b1b256.jpg"}/>
        </div>
      </div>
      
    </div>

    {/* New div */}
        <div className='flex items-center  justify-center mt-12 h-auto mb-8'>
          <div className=' w-3/5 bg-indigo-900 rounded h-16'>
        <h1 className='text-white '>
          Lightning deals
        </h1>
          </div>

        </div>
   
     </div>
  )
}

export default Home