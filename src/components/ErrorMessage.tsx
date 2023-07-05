import React from 'react'

interface ErrorMessageProps {
  error:string
}


export function ErrorMessage({error}: ErrorMessageProps){
  return (
    <div className='text-center text-red-500'>  {error} </div>
  )

}