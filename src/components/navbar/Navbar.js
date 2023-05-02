import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import "../navbar/Navbar.css"
export default function Navbar() {
    const [navbar, setNavbar] = useState([
        {name:'Users', path:'/'},
        {name:'Todos', path:'/todos'},
        {name:'Photos', path:'/photos'},
        {name:'Albums', path:'/albums'},
        {name:'Comments', path:'/comments'},
        {name:'Posts', path:'/Posts'}
    ])
  return (
    <div className='container-fluid'>
        <div className="row bg-danger">
            <div className="col-md-12 mt-4">
                <ul>
                    {
                        navbar.map((item,index)=>{
                            return <li key={index}>
                                <NavLink to={item.path} className="text-white text-decoration-none">{item.name}</NavLink>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}
