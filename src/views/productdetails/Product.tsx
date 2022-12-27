import React from 'react'
import { useDispatch } from 'react-redux'
import {useLocation} from "react-router-dom"
import { addtoCart } from '../../store/slices/cartSlice';
import Cart from '../cart/cart';
export const Product:React.FC=()=> {
    const location=useLocation();
    const dispatch=useDispatch();
    const handleAddProduct=(product:object)=>{
        console.log("added")
            dispatch(addtoCart(product))
        }
  return (
    <div>
           {/*   Details of the product section   */}
        <div  className="bg-[url('https://embryo-react.theironnetwork.org/static/media/page-title-bar.3ed966eb.jpg')]   grid place-items-center h-96">
            <h1 className='text-white text-4xl'>
                Product Details
            </h1>        
        </div>
        <Cart />
        {/* This will have viewable and zoomed pictures  */}
        <div className='grid grid-cols-4 grid-flow-col justify-items-center mt-4 mb-4'>
         <div className='row-span-1'>
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
                    className='h-80'
                    src={location.state.img}
                    />
                </div>
                {/* Third div */}
                <div className='mx-3'>
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
                    <button onClick={()=>handleAddProduct(location.state)}>
                        add to cart
                    </button>
                </div>
        </div>
        {/*    You might also like     */}

    </div>
  )
}

export default Product