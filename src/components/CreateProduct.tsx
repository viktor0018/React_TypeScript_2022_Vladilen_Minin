import { error } from 'console';
import React, {  useState } from 'react';
import { ErrorMessage } from './ErrorMessage';
import { IProduct } from '../models';
import axios from 'axios';


const productData:IProduct = {
  title:'',
  price: 11,
  description:'wewe',
  image:'wewe',
  category:'ewew',
  rating:{
    rate:33,
    count:232
  }
}

interface CreateProductProps {
  onCreate: (product: IProduct)=>void
}



export function CreateProduct({onCreate}:CreateProductProps){

  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const submitHandler = async (event:React.FormEvent) =>{
    setError('')
    event.preventDefault()

    if(value.trim().length === 0){
      setError('Please set valid title.')
      return
    }

    productData.title= value
    const resp = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

    onCreate(resp.data)
  }

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
    console.log('event',event)
    setValue(event.target.value)
  }


  return (
    <form onSubmit={submitHandler}>
      <input 
      type="text" 
      className='border py-2 px-4 mb-2 w-full outline-0' 
      placeholder='Enter prod title'
      value={value}
      onChange={changeHandler}
      />
      {error  && <ErrorMessage error={error}/ >}
      <button type="submit" className='py-2 px-4 border bg-yellow-400 hover:text-gray-500'>Create</button>
    </form>
  )

}