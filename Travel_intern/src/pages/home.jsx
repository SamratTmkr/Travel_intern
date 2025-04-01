import React from 'react'
import CarouselForHome from '../components/CarouselForHome'
import FlightAndStays from '../components/FlightAndStays'
import { Link } from 'react-router-dom'
import DestinationCard from '../components/DestinationCard';



const Home = () => {
  return (
    <>
      <div className="px-10 rounded-2xl mt-17">

        <CarouselForHome />
        <FlightAndStays />

        <div className="justify-between flex">
          <div className='text-[28px] mt-[58px] ms-15'>The Most Popular Destinations</div>
          <div className='text-[20px] mt-[58px]'>
            <Link>See More</Link>
          </div>
        </div>

        <DestinationCard/>

      </div>
    </>
  )
}

export default Home