import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from './layout/Layout'



const App = () => {
  return (
    <>
 
    <Layout/>
   <main className='w-full h-full'>
   <Outlet/>
   </main>
     
    </>
  )
}

export default App