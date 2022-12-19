// Write Test cases in this file
import React from "react";
import { render,screen,within } from "@testing-library/react"
import { Navbar } from "./Navbar";
test('Checking react', async() => {
    render(<Navbar />);
  const list=  await screen.getByRole('nav',{
    name:/nav/i,
  })
   expect(list).toMatchInlineSnapshot(`
   <ul aria-labelledby="nav" className='flex flex-row justify-center z-10 bg-white-700 text-black' >
             <li className=' hover:text-orange-600 hover:underline '>
                home
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
                    Contact us
                </li>
            </ul>
   `)
    })