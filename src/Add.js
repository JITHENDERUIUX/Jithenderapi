import React, { useState } from 'react'
import './All.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Add() {

  const Navigate=useNavigate();
  const [user,setUser]=useState({
    
});

  const HandleSumbit=(event)=>{
    event.preventDefault();

    axios.post(`http://localhost:3001/users`,user)
    .then(res=>{console.log(res);
      alert('NEW USER DETAILS ADDED SUCCESSFULLY')
      Navigate("/")


                
    })
.catch(err=>console.log("error",err))

  }







  return (
    <div>

      <p className='mem1'>ADD USER</p>
        <form onSubmit={HandleSumbit} >
          <label >NAME</label>
          <input type="text" required onChange={e=>setUser({...user,name:e.target.value})}    placeholder='enter your name' />
           <label >EMAIL</label>
          <input type="email" required onChange={e=>setUser({...user,email:e.target.value})}    placeholder='enter your email' />
          <label >PHNO</label>
          <textarea type="text" required onChange={e=>setUser({...user,phno:e.target.value})}    placeholder='enter your description' />
    <div className="flex">    
<button type="submit" className="btn btn-primary">SUBMIT</button>

<Link to="/" className='btn btn-danger ms-3' >BACK</Link>
</div>
        </form>
    </div>
  )
}

export default Add