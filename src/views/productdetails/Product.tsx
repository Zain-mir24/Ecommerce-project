import React from 'react'
import {useLocation} from "react-router-dom"
export const Product:React.FC=()=> {
    const location=useLocation()
    
  return (
    <div>
           {/*   Details of the product section   */}
        <div  className="bg-[url('https://embryo-react.theironnetwork.org/static/media/page-title-bar.3ed966eb.jpg')]   grid place-items-center h-96">
            <h1 className='text-white text-4xl'>
                Product Details
            </h1>        
        </div>
        {/* This will have viewable and zoomed pictures  */}
        <div className='grid grid-cols-3'>
         <div>
            {location.state.sideImages.map((i)=>{
                return(
              <div>
            <img 
            className='h-24'
            src={i}
            />
           </div>
                )
            })}
          
               </div>
        {/* Mid div */}
                <div>
                    <img 
                    src={location.state.img}
                    />
                </div>
                {/* Third div */}
                <div>
                    <a className='text-blue text-sm'>
                       {location.state.productCode}
                    </a>
                    <h1 className='text-4xl'>
                        {location.state.name}
                    </h1>
                    <p className='text-red-300'>
                        {location.state.price}
                    </p>
                    <p className='text-[10px]'>
                    Sit amet consectetur, adipisicing elit. Distinctio 
                    aperiam debitis ipsa veniam eos quas excepturi quae?
                     Recusandae distinctio nihil quia quis, 
                    eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae! Lorem ipsum dolo
                    </p>
                    <ol className="list-disc ml-4">
                         <li className='text-[9px]'>slim fit</li>
                         <li className='text-[9px]' >slim fit</li>
                         <li className='text-[9px]'>slim fit</li>

                    </ol>
                </div>
        </div>
        {/*    You might also like     */}

    </div>
  )
}

export default Product