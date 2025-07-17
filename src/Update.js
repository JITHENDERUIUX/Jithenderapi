import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Update() {
 const {Id}=useParams();
 const Navigate=useNavigate();
 const [newuser,setNewuser]=useState({});



useEffect(()=>{

axios.get(`http://localhost:3001/users/${Id}`)
.then(res=>{console.log(res);
           setNewuser(res.data);
})
.catch(err=>console.log("error",err))


},[])

const UpdateUser=(event)=>{
  event.preventDefault();
  axios.put(`http://localhost:3001/users/${Id}`,newuser)
  .then(res=>{console.log(res);
       if(window.confirm("DO YOU WANT UPDATE THE DETAILS"))
       {
 alert("USER DETAILS ARE UPDATED")
          Navigate("/")
       }
       else
       {
        window.location.reload();
       }
           
         
})
.catch(err=>console.log("error",err))
}


  return (
    <div>
    
      <p className='mem1'>UPDATE USER</p>
        <form onSubmit={UpdateUser} >
          <label >ID</label>
          <input type="number" readOnly value={newuser.id } required onChange={e=>setNewuser(prev=>({...prev,id:e.target.value}))}   placeholder=""/>
           <label >NAME</label>
          <input type="text"value={newuser.name } required onChange={e=>setNewuser(prev=>({...prev,name:e.target.value}))} placeholder='enter your name' />
           <label >EMAIL</label>
          <input type="email" value={newuser.email } required onChange={e=>setNewuser(prev=>({...prev,email:e.target.value}))}  placeholder='enter your email' />
          <label >BODY</label>
          <textarea type="text" value={newuser.body } required onChange={e=>setNewuser(prev=>({...prev,body:e.target.value}))} placeholder='enter your description' />
    <div className="flex">    
<button type="submit" className="btn btn-primary">SUBMIT</button>

<Link to="/" className='btn btn-danger ms-3' >BACK</Link>
</div>
        </form>
    </div>
  )
}

export default Update