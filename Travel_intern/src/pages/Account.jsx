import React from 'react'
import { IoCloudUpload, IoAddCircle } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import CoverPic from "../assets/coverPic.png"
import UserPic from "../assets/image.png"

const Account = () => {
  return (
    <>
    <div>
        <div className='min-h-screen w-full px-[102px] md:px-8 lg:px-24 mt-[135px] bg-[#FAFBFC]'>
            <div className='profile_pic h-[350px] md:h-80 w-full relative'>
                <img src={CoverPic} alt="user cover pic" width={'100%'} height={'100%'} className='w-full h-full' />
                <div className='absolute bottom-5 right-[20px] '>
                    <label htmlFor="userCoverPic" className='cursor-pointer flex gap-2 justify-center items-center py-2 px-4 bg-blue-300 rounded-sm oultine-none border-none'>
                    <IoCloudUpload /> 
                    <span className='text-[14px] '>Upload new cover</span>
                    </label>
                    <input type="file" id='userCoverPic' className=' hidden ' />
                </div>
            </div>
            <div className=" w-full h-screen px-5">
                <div className="user-info w-full h-[361px] text-center " >   
                    <div className="user-pic flex flex-col items-center mt-[-90px] mb-5">
                        <div >
                            <div className="img relative w-[186px] h-[186px] rounded-full" >
                        <img src={UserPic} alt={"user picture"} width={"100%"} height={"100%"} />
                        <div className='bg-blue-500 absolute p-2 rounded-full bottom-8.5 right-9.5 cursor-pointer'>
                            <label htmlFor="profilepic" className='cursor-pointer'>
                                <MdEdit />
                                </label>
                            <input type="file" id='profilepic' className='hidden' />
                        </div>
                            </div>
                        </div>
                        <div>
                            <h4 className='font-bold text-2xl'>Preetem ganesh</h4>
                            <p className='text-gray-500'>preetemsthings@gmail.com</p>
                        </div>
                    </div>
                    <div className="info px-[24px] py-[16px] bg-white flex justify-around align-middle">
                        <button className='  border-b-[2px] py-1 border-[#66ABC7]'>Account</button>
                        <button>History</button>
                        <button>Payment methods</button>
                    </div>
                </div>
                <div>
                    <h2 className='text-4xl font-bold'>Account</h2>
                    <div>
                        <form action="" className='mt-5'>
                            <div className='flex justify-between h-[52px] mb-5.5'>
                                <div  className='flex flex-col '>
                            <label htmlFor="name" className='text-gray-500'>Name</label>
                            <input type="text" id="name" value={"Preetam Ganesh"} className='font-semibold' />
                                </div>
                                <div >
                                    <button className='cursor-pointer flex items-center gap-2 text-[14px] px-4 py-2 rounded-lg border md:mt-0'>
                                    <RiEditBoxFill  className='text-[16px]'/>
                                    <span>Change</span>
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-between h-[52px] mb-5.5'>
                                <div  className='flex flex-col '>
                            <label htmlFor="email" className='text-gray-500'>Email</label>
                            <input type="email" id="email" value={"preetamsthings@gamil.com"} className='font-semibold' />
                                </div>
                                <div className='flex gap-2' >
                                    <button className='cursor-pointer flex items-center gap-2 text-[14px] px-4 py-2 rounded-lg border md:mt-0'>
                                    < IoAddCircle  className='text-[16px]' />
                                    <span>Add another email</span>
                                    </button>
                                    <button className='cursor-pointer flex items-center gap-2 text-[14px] px-4 py-2 rounded-lg border md:mt-0'>
                                    <RiEditBoxFill  className='text-[16px]'/>
                                    <span>Change</span>
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-between h-[52px] mb-5.5'>
                                <div  className='flex flex-col'>
                            <label htmlFor="passsword" className='text-gray-500'>Password</label>
                            <input type="passsword" id="passsword" value={"********"} className='font-semibold' />
                                </div>
                                <div >
                                    <button className='cursor-pointer flex items-center gap-2 text-[14px] px-4 py-2 rounded-lg border md:mt-0'>
                                    <RiEditBoxFill  className='text-[16px]'/>
                                    <span>Change</span>
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-between h-[52px] mb-5.5'>
                                <div  className='flex flex-col '>
                            <label htmlFor="phone" className='text-gray-500'>Phone Number</label>
                            <input type="tel" id="phone" value={"9*********"} className='font-semibold' />
                                </div>
                                <div >
                                    <button className='cursor-pointer flex items-center gap-2 text-[16px] px-4 py-2 rounded-lg border md:mt-0'>
                                    <RiEditBoxFill  />
                                    <span>Change</span>
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-between h-[52px] mb-5.5'>
                                <div  className='flex flex-col '>
                            <label htmlFor="address" className='text-gray-500'>Address</label>
                            <input type="text" id="address" value={"Preetam Ganesh"} className='font-semibold' />
                                </div>
                                <div >
                                    <button className='cursor-pointer flex items-center gap-2 text-[14px] px-4 py-2 rounded-lg border md:mt-0'>
                                    <RiEditBoxFill className='text-[16px]' />
                                    <span>Change</span>
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-between h-[52px] mb-5.5'>
                                <div  className='flex flex-col '>
                            <label htmlFor="dob" className='text-gray-500'>Date of birth</label>
                            <input type="date" id="dob" value={"09-01-2001"} className='font-semibold' />
                                </div>
                                <div >
                                    <button className='cursor-pointer flex items-center gap-2 text-[14px] px-4 py-2 rounded-lg border md:mt-0'>
                                    <RiEditBoxFill className='text-[16px]' />
                                    <span>Change</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Account