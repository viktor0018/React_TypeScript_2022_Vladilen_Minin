import React, { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
  product: IProduct

}

export function Product({product}: ProductProps){
  const [details, setDetails] = useState(false)
  const buttonBGClassName = !details ? 'bg-yellow-200': 'bg-blue-200'
  const buttonClasses = ['py-2 px-4 border', buttonBGClassName]

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt="" className="w-1/6" />
      <p> {product.title}</p>
      <span className="font-bold">{product.price}</span>
      <button onClick={()=>setDetails(prev=> !prev)} className={buttonClasses.join(' ')}>{!details ? 'Show details' :'Hide details'}</button>
      {details && <div>
        <p>{product.description}</p>
        Rate: <span style={{fontWeight:'bold'}}>{product.rating.rate}</span>
        </div> 
      }
    </div>
  )
}