import React, { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa6";
import { GiStarFormation } from "react-icons/gi";
import { MdLocalMovies } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";





const MovieDetail = () => {

    const [moviesWatched, setMoviesWatched] = useState([]);
    const [totalMovies, setTotalMovies] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const [userTotalRating, setUserTotalRating] = useState(0);
    const [userTotalRuntime, setUserTotalRuntime] = useState(0);

    // Fetch data from localStorage when the component mounts
    useEffect(() => {
        const storedMovies = localStorage.getItem("starclick");
        if (storedMovies) {
            const parsedMovies = JSON.parse(storedMovies);
            setMoviesWatched(parsedMovies);

            // Calculate total movies and average rating
            setTotalMovies(parsedMovies.length);

            const totalRating = parsedMovies.reduce((sum, movie) => sum + Number(movie.filterMovie.imdbRating), 0);
            setAverageRating((totalRating / parsedMovies.length).toFixed(1));

            // Calculate user's total rating
            const userTotalRating = parsedMovies.reduce((sum, movie) => sum + movie.index, 0);
            setUserTotalRating((userTotalRating / parsedMovies.length).toFixed(1));

            // Calculate user's Runtime
            const userTotalRuntime = parsedMovies.reduce((sum, movie) => sum + Number(movie.filterMovie.Runtime.slice(0, 2)), 0);
            setUserTotalRuntime((userTotalRuntime / parsedMovies.length).toFixed(1));
        }
    }, []);

    const removeMovie = (movie) => {
        console.log("movie", movie)
        const updatedMovies = moviesWatched.filter((m) => m.filterMovie.imdbID !== movie.filterMovie.imdbID);
        setMoviesWatched(updatedMovies);
        localStorage.setItem("starclick", JSON.stringify(updatedMovies));
    };





    return (
        <div className='w-full '>
            <div className='flex flex-col bg-[#293234] p-[10px] mt-[10px]'>
                <div>
                    <h2 className='text-[15px]  text-white'>MOVIES YOU WATCHED</h2>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-[5px]'>
                        <MdLocalMovies className='text-blue-500' />
                        <p className='text-white'> <span>{totalMovies}</span> Movies</p>
                    </div>
                    <div className='flex items-center gap-[5px]'>
                        <FaStar className='text-yellow-500' />
                        <span className='text-white'>{averageRating}</span>
                    </div>
                    <div className='flex items-center gap-[5px]'>
                        <GiStarFormation className='text-yellow-500' />
                        <span className='text-white'>{userTotalRating}</span>
                    </div>
                    <div className='flex  items-center gap-[5px]'>
                        <IoMdTime className='text-orange-500' />
                        <span className='text-white'>{userTotalRuntime} min</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap flex-col bg-[#24292c]'>

                {
                    moviesWatched?.map((movie) => {
                        return (
                            <div key={movie.index} className='flex  bg-[#293234] p-[10px] border-[2px] border-[solid] border-[#293234] mt-[10px] cursor-pointer'>
                                <div className='flex gap-[5px]'>
                                    <div className='w-[50px]'>
                                        <img className='w-full' src={movie.filterMovie.Poster} alt="" />
                                    </div>
                                    <div className='flex flex-col' >
                                        <div className='ml-[5px]'>
                                            <p className='text-white'>{movie.filterMovie.Title}</p>
                                        </div>
                                        <div className='flex gap-[18px]'>
                                            <div className='flex items-center gap-[3px]'>
                                                <FaStar className='text-yellow-500' />
                                                <span className='text-white'>{movie.filterMovie.imdbRating}</span>
                                            </div>
                                            <div className='flex items-center gap-[3px]'>
                                                <GiStarFormation className='text-yellow-500' />
                                                <span className='text-white'>{movie.index}</span>
                                            </div>
                                            <div className='flex items-center w-[80px] gap-[3px]'>
                                                <IoMdTime className='text-orange-300' />
                                                <span className='text-white'>{movie.filterMovie.Runtime}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='ml-[40px]'>
                                    <button onClick={() => removeMovie(movie)} className='text-[red] text-[20px]'><CiCircleRemove /></button>
                                </div>

                            </div>

                        )
                    })
                }




                

            </div>




        </div>




    )
}

export default MovieDetail
