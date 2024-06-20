import React from 'react'
import { useParams } from 'react-router-dom'

const ListOfProduct = () => {
  const{product}=useParams();
  console.log(product);
  return (
    <div>
      <h2>product{product}</h2>
    </div>
  )
}

export default ListOfProduct