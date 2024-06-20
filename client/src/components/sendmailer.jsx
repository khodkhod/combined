import axios from 'axios'
import React, { useState } from 'react'

function Sendmailer() {

   const [email, setEmail] = useState('');

    let url = "http://localhost:5000/sendMailer"
    const submit = () =>{
        axios
        .post(url, {
            email
        })
        .then((res) => {
          console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        console.log(email);
    }
  return (
    <div>
        <form action="" className="flex flex-col">
            <label htmlFor="email" className='text-blue-500'>email</label>
            <input type="email" value={email} className='border-2 border-blue-500 p-4 outline-slate-500' id='email' name='emailInput' onChange={(e) => setEmail(e.target.value)} autoFocus />
            <button onClick={submit} className='bg-blue-500 text-white p-2 rounded-md'>submit email for notification</button>
        </form>
    </div>
  )
}

export default Sendmailer