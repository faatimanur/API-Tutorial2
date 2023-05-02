import http from '../../axios'
import React, { useEffect, useState } from 'react'

export default function Photos() {
  const [photos, setPhotos] = useState([])
  const [select, setSelect] = useState('1')
  const [page, setPage] = useState(1)

  const getPhotos=()=>{
    http.get(`/photos?_page=${page}&_limit=${select}`).then(res=>{
      setPhotos(res.data)
    })
  }
  useEffect(()=>{
    getPhotos()
  },[select,page])

  const handleChange=(e)=>{
    setSelect(e.target.value)
  }

  const prevPage=()=>{
    if(page !== 1){
      setPage(prev=>prev-1)
    }
  }

  const nextPage=()=>{
    setPage(prev=>prev+1)
  }
  return (
    <div className="container">
      <div className='row'>
      {
        photos.map((item,index)=>{
          return <div className="col-md-4 my-4">
          <div className="card">
            <div className="card-header">
              <img src={item.url} alt="" className='w-100 h-100 border-2 rounded-2'/>
            </div>
            <div className="card-body">
              <p>
                <span>{item.id}</span>
                <span>{item.title}</span>
              </p>
            </div>
          </div>
        </div>
        })
      }
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-md-4">
          <select onChange={(e)=>handleChange(e)} className='form-control'>
            <option value="" selected>Select...</option>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="18">18</option>
          </select>
        </div>
        <div className="col-md-2 mb-4 d-flex justify-content-between">
          <button onClick={prevPage} className='btn btn-danger'>Prev</button>
          <span className='fs-3'>{page}</span>
          <button onClick={nextPage} className='btn btn-success'>Next</button>
        </div>
      </div>
    </div>
  )
}
