import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { data } from '../../data';
import { Products } from '../../components/Product/Products';
export const Home:React.FC=()=> {
   return (
    <div>
      <Navbar />   
      <div className=' flex
      justify-center  items-center  mt-36 mx-auto '>
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
            <div className="flex flex-row  justify-between">
            <h1 className='text-white p-3'>
                  Lightning deals
            </h1>
              <p className='text-white align-middle mt-3 mr-3'>
                View all
              </p>
            </div>
           {/* Lightining deals  section */}
           <div className='grid grid-cols-4 gap-5'>
            <div className='bg-slate-100 hover:shadow-lg'>
              <img 
              className='h-40 w-full p-4'
              src={"https://embryo-react.theironnetwork.org/static/media/cat-shoes.d1db9953.jpg"}
              />
             <div className='p-2'>
                  <p className='text-[12px] font-bold'>
                Men white Air
              </p>
              <p className='text-[10px]'>
                Shoes
              </p>
              <p className='text-red-600 text-[8px]'>
                Upto 20% off
              </p>
              </div>
            </div>
            <div className='bg-slate-100 hover:shadow-lg'>
              <img 
              className='h-40 w-full p-4'
              src={"https://embryo-react.theironnetwork.org/static/media/g-5-a.f7015f71.jpg"}
              />   
                <div className='p-2'>
                  <p className='text-[12px] font-bold'>
                Men white Air
              </p>
              <p className='text-[10px]'>
                Shoes
              </p>
              <p className='text-red-600 text-[8px]'>
                Upto 20% off
              </p>
                  </div>
            </div>
            <div className='bg-slate-100 hover:shadow-lg'>
              <img 
              className='h-40 w-full p-4'
              src={"https://embryo-react.theironnetwork.org/static/media/a-5-a.eae9d54f.jpg"}
              />
                <div className='p-2'>
                  <p className='text-[12px] font-bold'>
                Men white Air
              </p>
              <p className='text-[10px]'>
                Shoes
              </p>
              <p className='text-red-600 text-[8px]'>
                Upto 20% off
              </p>
            </div>
            </div>
            <div className='bg-slate-100 hover:shadow-lg'>
              <img 
              className='h-40 w-full p-4'
              src={"https://embryo-react.theironnetwork.org/static/media/cat-shoes.d1db9953.jpg"}
              />
              <div className='p-2'>
                  <p className='text-[12px] font-bold'>
                Men white Air
              </p>
              <p className='text-[10px]'>
                Shoes
              </p>
              <p className='text-red-600 text-[8px]'>
                Upto 20% off
              </p>
             </div>  
            </div>
          </div>
         </div>
         </div>
          {/* Top products */}
          <div className=' mt-[15rem] h-auto mx-auto  w-9/12' >
              <h2 className='items-start text-left font-bold m-3'>
                  Top Products
              </h2>
            <div className='grid grid-cols-4 gap-5'>
             {data.map((i:any)=>{
              return(
               <Products     
                name={i.name}
                price={i.price}      
                img={i.img}
                productCode={i.productCode}
                availability={i.availability}
                sideImages={i.sideImages}
                quantity={i.quantity}
                />
                      )
          })}

       </div>
       </div>

     </div>
  )
}

export default Home