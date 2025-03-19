import React from 'react'
import { Route } from 'react-router'
import { Router } from 'react-router'
import { BrowserRouter } from 'react-router'
import Login from './pages/Login'
import Layout from './layout/Layout'

const MyRoute = () => {
  return (
    <BrowserRouter>
        <Router>
            <Route path='/' element={<Layout />}>
          <Route path='/login' element={<Login />} />


            </Route>
        </Router>
    </BrowserRouter>

)
}

export default MyRoute