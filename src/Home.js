import React from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Add from './Add';
import { Link, useNavigate, useParams } from 'react-router-dom';


function Home() {
const Navigate=useNavigate();
    const {Id}=useParams();
    const api=process.env.REACT_APP_API_URL;
   

  const [data,setData]=useState([])
useEffect(() => {
  axios.get(`${api}`)
    .then(res =>{ console.log(res);
               setData(res.data);
    })   
    .catch(err => console.log("Error fetching data:", err));
}, []);




const HandleDelete=(Id)=>{

const confirm=window.confirm("Would you like to delete the user??")
if (confirm)
{
  axios.delete(`${api}/${Id}`)
  .then(res=>{
    alert("USER DETAILS ARE DELETED");
    window.location.reload();
  })
}
else
{
    window.location.reload();

}

}
// const Delete=(Id)=>{
// const confirm =window.confirm("Would you like to delete the user data?")
// if (confirm)
// {
//   axios.delete(`http://localhost:3001/users/` + Id)
//   .then(res=>{
//   alert('THE USER DATA IS DELETED')
//     window.location.reload(); 
//   }
  
//   )
//   .catch(err => console.log("errorrrrr",err))
// }
// else
// {
//       window.location.reload(); 

// }

// }


  return (
   
   <div className="App">

    
      
        <table className='table table-striped '>
       <thead><tr>
        
     <p onClick={()=>Navigate('/add')} className="ab1">ADD +</p>
         
         </tr></thead>

          <thead>
          <tr className='first '>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHNO</th>
             <th>ACTION</th>
          </tr>
          </thead>

  <tbody> 
    {data.map((hai)=>(
          <tr key={Number(hai.id)} className='second mt-5'>
            <td className='styles'> {Number(hai.id)} </td>
            <td className='styles'>{hai.name} </td>
            <td className='styles'>{hai.email} </td>
            <td className='styles'>{hai.phno} </td>
            <td>
             <Link to={`/update/${hai.id}`} className='btn btn-primary ms-3' >UPDATE</Link>
             <Link to={`/read/${hai.id}`} className='btn btn-secondary ms-3' >READ</Link>
             <Link onClick={e => HandleDelete(hai.id)} className='btn btn-danger ms-3' >DELETE</Link>


            </td>
          </tr>
          ))}
          </tbody>
       </table>
       
    </div>





  )
  


}


export default Home