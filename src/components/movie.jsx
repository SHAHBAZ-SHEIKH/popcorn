import React, { useState, useContext } from 'react'
import MovieDetail from './MovieDetail'
import { IoCalendarOutline } from "react-icons/io5";
import mycontext from './context/myContext'
import SelectMovie from './SelectMovie';



const Movie = () => {

    const { movie,loader} = useContext(mycontext)
    const [show, setShow] = useState(false)
    const [movieItem, setMovieItem] = useState([])

    const movieDetail = (movieItem) => {
        console.log("movieItem", movieItem)
        setMovieItem(movieItem)

        setShow(true)
        console.log("show", show)

    }




    return (
        <div className='w-full flex justify-center '>
            <div className='w-[50%]  p-[20px] flex justify-center gap-[20px]'>
                <div className='w-[50%] border-[2px] border-[solid] border-[#293234] bg-[red]'>
                    {
                        loader ? <h1 className='text-white text-[30px]'>Loading...</h1> : (
                            <div className='flex flex-wrap flex-col bg-[#24292c] border-[2px] border-[solid] border-[#293234] '>

                                {
                                    movie?.map((movieItem) => {
                                        const { Poster, Title, Year, Type, imdbID } = movieItem
                                        return (
                                            <div onClick={() => movieDetail(movieItem)} key={imdbID} className='flex  bg-[#293234] p-[10px] border-[2px] border-[solid] border-[#293234] mt-[10px] cursor-pointer'>
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
                        )
                    }

                </div>

                <div className='w-[50%] bg-[#24292c] '>


                    {
                        show ? <SelectMovie movieItem={movieItem} setShow={setShow} /> : <MovieDetail />
                    }


                </div>


            </div>
        </div>
    )
}

export default Movie
