import React from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'

export const Navbar:React.FC=()=> {
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-3 sm:text-4xl'>
                        Brand
                    </h1>
                    <ul className='hidden md:flex'>
                        <li>
                            Home
                        </li>
                        <li>
                            about
                        </li>

                    </ul>
                </div>
            </div>
            <BeakerIcon className='w-5' />
        </div>
    )
}

