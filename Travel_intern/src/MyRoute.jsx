import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router'
import Login from './pages/Login'
import Layout from './layout/Layout'

const MyRoute = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/login' element={<Login />} />
         
        </Route>

      </Routes>
    </BrowserRouter>
)
}

export default MyRoute