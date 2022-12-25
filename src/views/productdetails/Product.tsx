import React from 'react'

export const Product:React.FC=()=> {
  return (
    <div>
           {/*   Details of the product section   */}
        <div  className="bg-[url('https://embryo-react.theironnetwork.org/static/media/page-title-bar.3ed966eb.jpg')]   grid place-items-center h-96">
            <h1 className='text-white text-4xl'>
                Product Details
            </h1>        
        </div>
        {/* This will have viewable and zoomed pictures */}
        <div className='grid grid-cols-3'>
                <div>
           <div>
            12
           </div>
           <div> 
           <img
            className='h-24'
            src={"https://embryo-react.theironnetwork.org/static/media/4-item-d.0d054583.jpg"}/>
           </div>
           <div >
            <img 
            className='h-24'
            src={"https://embryo-react.theironnetwork.org/static/media/4-item-b.738d4594.jpg"}/>
           </div>

                </div>
                <div>
                    <img 
                    src={"https://embryo-react.theironnetwork.org/static/media/4-item-a.5108aed9.jpg"}
                    />

                </div>
                <div>
                    <a className='text-blue text-sm'>
                        Back to shop
                    </a>
                    <h1 className='text-4xl'>
                        Blue Jean
                    </h1>
                </div>
        </div>
        {/*    You might also like     */}

    </div>
  )
}

export default Product