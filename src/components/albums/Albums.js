import React, { useEffect, useState } from 'react'
import http from '../../axios'

export default function Albums() {
const [albums, setAlbums] = useState([])
const [select, setSelect] = useState('1')
const [page, setPage] = useState(1)
const getAlbums=()=>{
  http.get(`/albums?_page=${page}&_limit=${select}`).then(res=>{
  setAlbums(res.data)
  })
};

useEffect(()=>{
  getAlbums()
},[select,page]);

const handleChange=(e)=>{
  setSelect(e.target.value)
};

const prevPage=()=>{
  if(page !== 1){
    setPage(prev=>prev-1)
  }
}
const nextPage=()=>{
  setPage(prev=>prev+1)
}
  return (
    <div className='container'>
      <div className="row">
        {
          albums.map((item,index)=>{
            return <div className="col-md-4 my-4">
              <div className="card h-100">
                <div className="card-header">
                  <h1>{item.id}</h1>
                </div>
                <div className="card-body">
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
          })
        }
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-md-4">
          <select className='form-control' onChange={(e)=>handleChange(e)}>
            <option value="" selected>Select...</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="7">7</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <div className="col-md-2 mb-4 d-flex justify-content-between">
          <button className='btn btn-danger' onClick={prevPage}>Prev</button>
          <span className='fs-3'>{page}</span>
          <button className='btn btn-success' onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
  )
}
