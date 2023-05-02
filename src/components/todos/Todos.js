import React,{ useState, useEffect} from 'react'
import http from '../../axios'
import '../todos/Todos.css'
export default function Todos() {
    const [todos, setTodos] = useState([])
    const [select, setSelect] = useState('3')
    const [page, setPage]= useState(1)

    const getTodos=()=>{
        http.get(`/todos?_page=${page}&_limit=${select}`).then(res=>{
            setTodos(res.data)
        })
    }

    useEffect(()=>{
        getTodos()
    },[select,page])

    const handleChange=(e)=>{
        setSelect(e.target.value)
    }

    const nextPage=()=>{
        setPage(prev=>prev+1)
    }

    const prevPage=()=>{
        if(page !== 1){
            setPage(prev=>prev-1)
        }
    }

  return (
    <div className='container'>
        <div className="row">
            {
                todos.map((item,index)=>{
                    return <div className="col-md-4 my-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <h1>userId: {item.id}</h1>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <span className='text-primary'>Title:</span>
                                    <span className='mx-1'>{item.title}</span>
                                </div>
                                <div className='d-flex items-center'>
                                    <span className='mx-1'>Completed:</span>
                                    <input type="checkbox" checked={item.completed}/>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        <div className="row d-flex justify-content-between">
            <div className="col-md-3">
                <select onChange={(e)=>handleChange(e)} className='form-control'>
                    <option value="" selected>Select...</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                    <option value="200">200</option>
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
