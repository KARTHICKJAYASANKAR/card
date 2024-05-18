import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email , setEmail ] = useState("");
    const [phn , setPhn ] = useState("");

    function handleSubmit(e){
          e.preventDefault();
          const data={
            Name : name,
            Email : email,
            PhoneNumber : phn
          }
        axios.post('https://sheet.best/api/sheets/f626d91e-2850-4e9f-9810-0a7854f40ab1' , data)
        .then((res)=>{
            console.log(res);
            setName('');
            setEmail('');
            setPhn('');
            navigate('/');
        })

    }

  return (
    <div className='reg-page'>
        <div className='back-btn-div'>
           <Link to="/">
           <button className='back-btn'> back</button>
            </Link> 
        </div>
        
        <form className='reg-form' onSubmit={(e)=>handleSubmit(e)}>
           <input type='text' className='reg-input' placeholder='Enter name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
           <input type='text' className='reg-input' placeholder='Enter email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
           <input type='text' className='reg-input' placeholder='Enter Phone Number'  value={phn} onChange={(e)=>{setPhn(e.target.value)}}/>
           <button className='reg-btn'>Register</button>
        </form>
    </div>
  )
}

export default Register