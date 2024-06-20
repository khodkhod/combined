import axios from 'axios'
import React, { useState } from 'react'

const Dashboard = () => {
  const navigate=useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData]=useState([])
  // let url="http:localhost:5000/dashboard"
  let url="http:localhost:5000/verifyUser"

  // useEffect(() => {
  //   axios.get(url).then((res)=>{
  //     console.log(res.data.data);
  //     setData(res.data.data)
  //     setIsLoading(true)
  //    }) .catch((err)=>{
  //       console.log(err);
  //     })
      
  //   },[]);
 
  const token = localStorage.getItem("token")
  useEffect(() => {
    axios.get(url,{
      headers:{
        Authorization:`Bearers ${token}`,
        "Content-Type":"Application/json",
        Accept:"Application/json"
      }
    })
    .then((res)=>{
      console.log(res.data);
      if (!res.data.status) {
        localStorage.removeItem("token")
        navigate("/login")
      }
    })
    },[]);
  return (
    <div className='text-3xl font-bold text-center mt-10'>Dashboard
    
    <div className='flex flex-col justify-center mt-10'>
      {!isLoading ? <h1>Loading</h1>:
      data.map((datas)=>(
        <div key={datas._id} className='flex flex-row justify-center px-10'>
          <div className='w-[200px]'>
            <h1>{datas.firstName}</h1>
          </div>  
          <h1 className='text-center'>{datas.lastName}</h1>
        </div>
      ))
      }
    </div>
    </div>
  )
}

export default Dashboard