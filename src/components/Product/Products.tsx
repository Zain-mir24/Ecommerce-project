import React from 'react'
import tw from "tailwind-styled-components"
import { useNavigate } from "react-router-dom";

interface productProp{
    img:string,
    name:string,
    price:number,
    productCode:string,
    quantity:number,
    availability:string,
    sideImages:Array<string>

}
export const Products:React.FC<productProp>=(props)=> {
  const navigate = useNavigate()
    const {name,img,price}=props
    const handleclick=(i:any)=>{
        console.log(i,"data")
        navigate("/productdetail",{
          state:i
        })
      }
  return (
   <Container>
      <img src={img}/>
    <div className='pt-5'>
      <p className='text-[12px]  font-bold'>
        {name}
        </p>    
        <p className='
         text-red-600
        text-[8px]'>
       { price}
        </p>
      <Button onClick={()=>handleclick(props)}>
      View details
      </Button>
   </div>
   </Container> 
  )
}
const Container=tw.div`
bg-slate-100
hover:shadow-lg
img{
    h-50
    w-full
    p-4
}
`
const Button=tw.button`
rounded-2 text-[10px] 
text-black 
bg-slate-300
border-none
hover:bg-orange-500
hover:text-white w-20
`
