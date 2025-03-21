import React from 'react'
import Layout from './layout/Layout'
import { Outlet } from 'react-router'
import Header from './layout/Header'
import Footer from './layout/Footer'

const App = () => {
  return (
    <>

<Header/>
   <main className='w-full h-full'>
   <Outlet/>
   </main>
<Footer/>

    </>
  )
}

export default App