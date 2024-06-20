import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  let url ="https://api.github.com/users"

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setData(res.data);
      setIsLoading(true);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <div className='flex flex-row flex-wrap gap-6 items-center justify-center mt-20'>
      {isLoading ? <h1 className='text-center text-2xl font-bold mt-5'>Loading</h1>
      : data.map((user,index) =>(
        <div key={index} className='flex flex-col w-[250px] gap-2 shadow-lg text-center p-5'>
          <img src={user.avatar_url} alt="user" className='rounded-full' />
          <h1 className='text-2xl font-bold'><span>Login:</span>{data.login}</h1>
          <h1 className=' font-bold'><span>ID:</span>{data.id}</h1>
          <h1 className='text-2xl font-bold'><span>Type:</span>{data.type}</h1>
          <button onClick={()=>navigate(`/users/user/${user.login}`)} className='bg-green-200 rounded-md my-3 p-3'>View profile</button>
        </div>
      ) )
        
      
      }
    </div>

  )
}

export default Users