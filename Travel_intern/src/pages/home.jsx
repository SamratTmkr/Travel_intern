import React from 'react'
import CarouselForHome from '../components/CarouselForHome'
import FlightAndStays from '../components/FlightAndStays'


const Home = () => {
  return (
    <>
    <div className="px-10 rounded-2xl mt-17">

      <CarouselForHome/>
      <FlightAndStays/>

    </div>
    </>
  )
}

export default Home