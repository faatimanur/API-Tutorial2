import React from 'react'
import { useState, useEffect} from "react";
import http from '../../axios';

function Users() {
  const [users, setUsers] = useState([])
  const [select, setSelect] = useState('10')
  const [page, setPage] = useState (1)
  const getUsers=(page,select)=>{
    console.log(select, 'issue');
    http.get(`/users?_page=${page}&_limit=${select}`).then(response=>{
    setUsers(response.data)
  })
  }
  const handleChange=(e)=>{
    e.preventDefault();
    console.log(e.target.value);
    setSelect(e.target.value);
    getUsers(page,e.target.value);
  }
  useEffect(()=>{
    getUsers()
  },[])

  const increasePage=(page)=>{
    setPage(page+1)
    getUsers(page+1, select)
  }

  const decreasePage=(page)=>{
    if(page !== 1){
      setPage(page-1)}
      getUsers(page-1, select)
  }
  return (
    <div className='container'>
     <div className='row'>
      <div className="col-md-12 mt-4">
      <table className='table table-bordered table-hover'>
      <thead>
        <tr>
          <th>t/r</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((item,index)=>{
            return <tr key={index}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
            </tr>
          })
        }
      </tbody>
      </table>
      </div>
     </div>
     <div className="row d-flex justify-content-between">
      <div className="col-md-4">
      <select className='form-control' onChange={(e)=>handleChange(e)}>
            <option value="" selected>Select...</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
      </select>
      </div>
      <div className="col-md-2 d-flex justify-content-between">
        <button className='btn btn-danger' onClick={(()=>decreasePage(page))}>prev</button>
        <span className='fs-3'>{page}</span>
        <button className='btn btn-success' onClick={(()=>increasePage(page))}>next</button>
      </div>
     </div>
    </div>
  )
}

export default Users