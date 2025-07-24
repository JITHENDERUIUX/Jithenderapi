import React, { useState } from 'react'
import './All.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Add() {

  const Navigate=useNavigate();
  const [error, setError] = useState('');

  const [user,setUser]=useState({
});
    const api=process.env.REACT_APP_API_URL;

//   const HandleSumbit=(event)=>{
//     event.preventDefault();

//     axios.post(`${api}`,user ,
//       {
  
// })
//     .then(res=>{console.log(res);
//       alert('NEW USER DETAILS ADDED SUCCESSFULLY')
//       Navigate("/")


                
//     })
// .catch(err=>console.log("error",err))

//   }
  const HandleSubmit= async (event)=>
  {
    event.preventDefault();
try 
{
  const res = await axios.get(`${api}`)
  const exist = res.data.find(j=>String(j.id)===String(user.id))
if (exist)
{
  setError(`USER WITH THIS ID ${user.id}  ALREADY EXIST`);
  return;
}

await axios.post(`${api}`,user)
.then(res=>{console.log(res);
      alert('NEW USER DETAILS ADDED SUCCESSFULLY')
      Navigate("/")});

}
 catch (err) {
    console.error("Error:", err);
    setError("Something went wrong.");
  }

  }







  return (
    <div>

      <p className='mem1'>ADD USER</p>
        <form onSubmit={HandleSubmit} >
{error && <p className="text-danger">{error}</p>}


           <label >ID</label>
          <input type="number" on required onChange={e=>setUser({...user,id:e.target.value})}    placeholder='enter your id' />
          <label >NAME</label>
          <input type="text" required onChange={e=>setUser({...user,name:e.target.value})}    placeholder='enter your name' />
           <label >EMAIL</label>
          <input type="email" required onChange={e=>setUser({...user,email:e.target.value})}    placeholder='enter your email' />
          <label >PHNO</label>
          <textarea type="number" required onChange={e=>setUser({...user,phno:e.target.value})}    placeholder='enter your description' />
    <div className="flex">    
<button type="submit" className="btn btn-primary">SUBMIT</button>

<Link to="/" className='btn btn-danger ms-3' >BACK</Link>
</div>
        </form>
    </div>
  )
}

export default Add