import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="mt-10">

                <h1 className='text-center text-2xl'>Explore the world with AtlasXplore</h1>
                <h1 className='mt-3 text-center text-blue-500'>Discover new places and experiences</h1>


                <div className="bg-[#CCDCF3] rounded-lg px-25 py-10 mt-5">


                    <div className=" text-[44px] leading-14">
                        <h1>Join</h1>
                        <h1>AtlasXplore</h1>
                    </div>

                    <div className="mt-10">
                        <h1 className='text-lg font-bold text-[20px] text-gray-700'>The Travel</h1>
                        <h1 className='text-sm text-gray-700 text-[16px] '>Get inspired! Receive travel discounts, tips and behind the scenes stories.</h1>
                    </div>

                    <div className="mt-3">
                        <input type="email" className="input w-100 px-3 py-3 bg-white rounded-sm" placeholder="Your Email Address" />
                        <button className='bg-[#112211] px-2 py-3 text-white rounded-sm ms-4'>Subscribe</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer
