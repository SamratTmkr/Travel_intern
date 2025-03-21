import React from 'react'
import Layout from './layout/Layout'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>

  <Layout/>
   <main className='w-full h-full'>
   <Outlet/>
   </main>
      <main>
        <Layout />
      </main>

    </>
  )
}

export default App