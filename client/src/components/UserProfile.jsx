import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const UserProfile = () => {
//     const {username} = useParams()
//     let url=`https://api.github.com/${UserProfile}`
//     const [List, setList] = useState([])
//     const [isLoading, setIsloading] = useState(false)
//     useEffect(() => {
//         // const home =()=>
//         axios
//         .get(url)
//         .then((res) => {
//             console.log(res.data)
//             setList(res.data)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     },[])
//   return (
//     <>
    
//     <div className='flex flex-row flex-wrap space-y-4 ms-32'>
//         <div>
//             <h1>{List.login}</h1>
//             <h1>{List.type}</h1>
//              <img src={List.avatar_url} width={100} height={100} alt="profile" className='w-full h-48'/>
//             <Link to={List.followers_url}>
//             <button type='submit'>Follow</button>
//             </Link>
//         </div>
//     </div>
    
//     </>
//   )
}

export default UserProfile