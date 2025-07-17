import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function Read() {

const {Id}=useParams();
      
  const [data,setData]=useState([])
useEffect(() => {
  axios.get(`http://localhost:3001/users/` + Id )
    .then(res =>{ console.log(res);
               setData(res.data);
    })   
    .catch(err => console.log("Error fetching data:", err));
}, []);


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h4 className="text-center mb-4">User Details</h4>

        <div className="">
            <p>ID-NO    : <strong>  {data.id}</strong></p>
            <p>NAME  : <strong>{data.name}</strong></p>
            <p>EMAIL  : <strong>{data.email}</strong></p>
            <p>PHNO   : <strong>{data.phno}</strong></p>
</div>
          
          <div className="text-center">
        <Link  to={`/update/${data.id}`}   className="btn btn-primary me-3">    EDIT  </Link>
        

          <Link to={'/'} className="btn btn-secondary">BACK</Link>
          
        </div>
      </div>
    </div>
  )
}

export default Read