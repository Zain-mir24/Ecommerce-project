import React from 'react'
import { cartItems, removeFromCart,TotalAmount,increaseQuantity,decreaseQuantity,Totalquantity} from '../../store/slices/cartSlice'
import { useSelector,useDispatch } from 'react-redux'
import { Navbar } from '../../components'
import tw from "tailwind-styled-components"

function Cart() {
  const cart=useSelector(cartItems)
  const dispatch=useDispatch()

  const amount=useSelector(TotalAmount)
 const quant =useSelector(Totalquantity)

  const deleteProduct=(product)=>{
        dispatch(removeFromCart(product))
  }
  return (
    <div>
      <Navbar />
      <div  className="bg-[url('https://embryo-react.theironnetwork.org/static/media/page-title-bar.3ed966eb.jpg')]   grid place-items-center h-96">
            <h1 className='text-white text-4xl '>
                Here are your cart details
            </h1>   
          
        </div>
        {/* Rendering Cart divs here should be able to add cart data. */}
       
         { cart.map((item)=>{
            return(
              <div className='m-4  border-2 flex justify-evenly'>
             <Container>
              <img 
                 src={`${item.img}`}
             />
              </Container> 
              <div className='my-24 text-xl font-medium'>
            <p>
              Name
            </p>
            {item.name}
              </div> 
          <div className='my-24 text-sm font-medium'>
              <p>
                Price
              </p>
              ${item.price}
          </div>
          <div className='my-24 text-sm font-medium'>
         <p>
          Product Code
         </p>
            {item.productCode}
          </div>
          <div className='my-24 text-sm font-medium'>
            <p className='px-7'>
              quantity
            </p>
            <div className='flex flex-row justify-evenly'>
              <button className='w-8' onClick={()=>dispatch(decreaseQuantity(item))}>
                -
              </button>
              <p className='px-4'>
              {item.quantity}
              </p>
            
            <button  className='w-8' onClick={()=>dispatch(increaseQuantity(item))}>
              +
            </button>

            </div>
              
          </div> 
         <div className='my-24 text-sm font-medium'>
           <button 
           onClick={()=>deleteProduct(item)}
           className='bg-rose-600 border-0 w-full'>  
               delete
          </button>    
            </div>
          </div>
            )
          })}
         
      <div className='flex flex-row justify-end w-3/4'>
        <h3>
          SubTotal:Cart{amount}
        </h3>
        <h3>
          Total quantity {quant} 
        </h3>
      </div>
      
      </div>
  )
}

export default Cart
      const Container=tw.div`
      bg-slate-100
      hover:shadow-lg
      img{
          h-30
          w-1/6
          p-7
      }
      `