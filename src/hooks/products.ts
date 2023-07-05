import React, { useEffect, useState } from 'react';
import axios, {  AxiosError } from 'axios';
import { IProduct } from '../models';


export function useProducts(){
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product:IProduct){
    setProducts(prev=> [...prev, product])
  }

  async function fetchProd() {
    try{
    setLoading(true)
    setError('')
    const resp = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=2')

    console.log('resp=', resp)
    setProducts(resp.data)
    setLoading(false)
    }catch (e:unknown){
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(()=>{console.log('eeee')
  fetchProd()
  }, [])

  return {products, loading,error, addProduct}
}