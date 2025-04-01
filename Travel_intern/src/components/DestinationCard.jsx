import React from 'react'

const DestinationCard = () => {
    return (
        <div className="card bg-base-100 w-[295px]  ms-15 mt-[20px]">
            <figure>
                <img
                    src="./Cards/Card1.png"
                    alt="Shoes" className='h-[220px] mb-[14px]'/>
            </figure>
            <div className="leading-6 ">
                <h2 className="card-title">Sweden</h2>
                <p className='text-xs'>773 Properties</p>
            </div>
        </div>
    )
}

export default DestinationCard

