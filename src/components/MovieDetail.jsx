import React from 'react'
import { FaStar } from "react-icons/fa6";
import { GiStarFormation } from "react-icons/gi";
import { MdLocalMovies } from "react-icons/md";
import { IoMdTime } from "react-icons/io";





const MovieDetail = () => {

    

    return (
        <div className='w-full '>
            <div className='flex flex-col bg-[#293234] p-[10px] mt-[10px]'>
                <div>
                    <h2 className='text-[15px]  text-white'>MOVIES YOU WATCHED</h2>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-[5px]'>
                        <MdLocalMovies className='text-blue-500' />
                        <p className='text-white'> <span>0</span> Movies</p>
                    </div>
                    <div className='flex items-center gap-[5px]'>
                        <FaStar className='text-yellow-500' />
                        <span className='text-white'>0.0</span>
                    </div>
                    <div className='flex items-center gap-[5px]'>
                        <GiStarFormation className='text-yellow-500' />
                        <span className='text-white'>0</span>
                    </div>
                    <div className='flex  items-center gap-[5px]'>
                        <IoMdTime className='text-orange-500' />
                        <span className='text-white'>148 min</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
