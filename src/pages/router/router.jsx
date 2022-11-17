
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashbaord from '../dashboard/dashboard'
import Login from '../Login/Login'
import Register from '../Register/Register'



export default function Routerone() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Login/>}/>
                <Route  path='/signup' element={<Register/>}/>
                <Route  path='/dashboard' element={<Dashbaord/>}/>
            </Routes>
        </Router>
    </div>
  )
}