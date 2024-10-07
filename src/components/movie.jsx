import React, {useState,useContext } from 'react'
import MovieDetail from './MovieDetail'
import { IoCalendarOutline } from "react-icons/io5";
import  mycontext  from './context/myContext'


const movie = () => {

    const { movie} = useContext(mycontext)
    
    

    return (
        <div className='w-full flex justify-center '>
            <div className='w-[50%]  p-[10px] flex justify-center gap-[20px]'>
                <div className='w-[50%] '>
                    <div className='flex flex-wrap flex-col bg-[#24292c]'>

                        {
                            movie?.map((movieItem) => {
                                const { Poster, Title, Year, Type, imdbID } = movieItem
                                return (
                                    <div  key={imdbID} className='flex  bg-[#293234] p-[10px] border-[2px] border-[solid] border-[#293234] mt-[10px] cursor-pointer'>
                                        <div className='w-[50px]'>
                                            <img className='w-full' src={Poster} alt="" />
                                        </div>
                                        <div className='flex   flex-col' >
                                            <div className='ml-[5px]'>
                                                <p className='text-white'>{Title}</p>
                                            </div>
                                            <div className='flex gap-[7px] items-center ml-[10px]'>
                                                <IoCalendarOutline className='text-red-600' />
                                                <p className='text-white'>{Year}</p>
                                            </div>



                                        </div>
                                    </div>
                                )
                            })
                        }



                    </div>
                </div>

                <div className='w-[50%] bg-[#24292c]'>
                    <MovieDetail/>

                </div>


            </div>
        </div>
    )
}

export default movie
