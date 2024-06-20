import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
const navigate = useNavigate();
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
})

let url="http://localhost:5000/register";

 const registerNow = (e) => {
     e.preventDefault()
     console.log({firstName, lastName, email, password});
     setDetails({firstName:firstName, 
                 lastName:lastName, 
                 email:email,
                 password:password});
     axios
     .post(url, {
         firstName,
         lastName,
         email,
         password
     })
     .then((res) => {
         console.log(res.data);
         navigate('/signin');
     })
     .catch(err => {
         console.log(err);
     })

 }
  return (
    <div>
        <form action="" className='flex flex-col items-center justify-center gap-4 my-4'>

     <div className='flex flex-col'>
        <label htmlFor="text">First Name</label>
        <input type="text"  placeholder='Enter First Name' className='border p-2 rounded-md border-red-400' onChange={(e) => setFirstName(e.target.value)}/>
    </div>
     <div className='flex flex-col'>
        <label htmlFor="text">Last Name</label>
        <input type="text"  placeholder='Enter Last Name' className='border p-2 rounded-md border-red-400' onChange={(e) => setLastName(e.target.value)}/>
    </div>
     <div className='flex flex-col'>
        <label htmlFor="email">Email</label>
        <input type="text"  placeholder='Enter Email' className='border p-2 rounded-md border-red-400' onChange={(e) => setEmail(e.target.value)}/>
    </div>
     <div className='flex flex-col'>
        <label htmlFor="password">Password</label>
        <input type="text"  placeholder='Enter Last Name' className='border p-2 rounded-md border-red-400' onChange={(e) => setPassword(e.target.value)}/>
    </div>

    
    <button className='bg-green-300 p-4 border-red-600' onClick={registerNow}>
        Register
    </button>

        </form>
        <div>
            <p>{details.firstName}</p>
            <p>{details.lastName}</p>
            <p>{details.email}</p>
            <p>{details.password}</p>
        </div>
    </div>
  )
}

export default Register