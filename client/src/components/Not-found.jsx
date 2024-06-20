import React from 'react'
import { useNavigate } from 'react-router-dom'

const  NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1 className='text-4xl text-blue-400'>This is not the Page you're looking for</h1>
        <p className='text-center text-3xl text-blue-300'>404</p>
        <button className='bg-red-200 rounded-md' onClick={()=>navigate("/")}>Go back to home page</button>
    </div>
  )
}

export default NotFound