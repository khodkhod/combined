import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signin = () => {
   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [details, setDetails] = useState({
      email: '',
      password: ''
   });

let url="http://localhost:5000/login";

const registerNow = (e) => {
   e.preventDefault()
   console.log({ email, password});
   setDetails({ 
               email:email,
               password:password});
   axios
   .post(url, {
       email,
       password
   })
   .then((res) => {
       console.log(res.data);
       localStorage.setItem('token', res.data.theToken);
       navigate('/dashboard');
   })
   .catch(err => {
       console.log(err);
   })

}
    return (
      
      <div>
            <form action="" className='flex flex-col items-center justify-center gap-4 my-4'>
  
  <div className='flex flex-col'>
     <label htmlFor="text">Email</label>
     <input type="email"  placeholder='Enter Email' className='border p-2 rounded-md border-red-400'
     onChange={(e) => setEmail(e.target.value)}/>
  </div>
  
  <div className='flex flex-col'>
     <label htmlFor="password">Password</label>
     <input type="password"  placeholder='Enter Password' className='border p-2 rounded-md border-red-400' onChange={(e) => setPassword(e.target.value)}/>
  </div>
  
  
  
  
  <button className='bg-green-300 p-4 border-red-600' onClick={registerNow}>
     Register
  </button>
            
     </form>
         <div>
            <p>{details.email}</p>
            <p>{details.password}</p>
            </div>
      </div>


    )
  }
  
  export default Signin