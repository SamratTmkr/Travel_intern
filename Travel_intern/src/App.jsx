import React from 'react'
// import Account from './pages/Account'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
   {/* <Account/> */}
   <main>
   <Outlet/>
   </main>
    
    </>
  )
}

export default App