import React from 'react';
import {Link} from "react-router-dom"
export const Navbar:React.FC=()=> {
    return (
        <div className='w-screen h-[80px] bg-indigo-700
                 z-10  fixed drop-shadow-lg top-0'>
            <div className='px-2 flex justify-evenly items-center content-center h-full '>
                <div>
                </div>
                <div className='flex items-center  text-center w-full'>
                    <h1 className='text-3xl font-bold text-white sm:text-4xl mx-auto'>
                      Panther
                    </h1>
                </div>
                <div>
              </div>
            </div>
           <div>
            <ul aria-labelledby="nav" className='flex flex-row justify-center z-10 bg-gray-200 text-black' >
             <li className=' hover:text-orange-600 hover:underline '>
             <Link
                 to={"/"}
                 >
                home
                </Link>
                </li>
                 <li className=' hover:text-orange-600 hover:underline'>
                    shop
                </li>
                 <li className=' hover:text-orange-600  hover:underline'>
                    Accessories
                </li>
                <li className=' hover:text-orange-600 hover:underline '>
                    categories
                </li>
                <li className=' hover:text-orange-600 hover:underline'>
                    Pages
                </li>
                 <li className=' hover:text-orange-600 hover:underline'>
                 <Link
                 to={"/Cart"}
                 >
                 Cart
                 </Link>   
                </li>
                <li className=' hover:text-orange-600 hover:underline'>
                    Contact us
                </li>
            </ul>
           </div>
        </div>
    )
}

