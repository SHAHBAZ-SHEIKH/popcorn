import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
const SelectMovie = ({movieItem,setShow}) => {
    console.log("movieId",movieItem)

    const [start, setStart] = useState(0)
    const [filterMovie,setFilerMovie] = useState([])
    const [starclick,setStartClick] = useState([])
    const [startLength,setStartLenght] =useState(false)

    const starBar = ["⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐"]

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?i=${movieItem.imdbID}&apikey=2a6626ef`)
        .then(res =>res.json())
        .then((data)=>setFilerMovie(data))
        .catch((err)=>{
            console.log(err)
        })

    },[])
    console.log("filterMovie",filterMovie)

    const startHandler = (index,filterMovie)=>{
        const star = [...starclick]

        const findIndex = starclick.findIndex((star,index)=> star.filterMovie.imdbID ===filterMovie.imdbID)
        console.log("findIndex",findIndex)
        if(findIndex == -1){
            star.push({
                index:index,
                filterMovie:{
                    ...filterMovie
                }

            })
            setStartClick([...star])
        }
        else{
            star[findIndex].index +=1
            setStartClick([...star])
        }

        
        setStartLenght(true)

        setStartClick(star)

    }
    console.log("starclick",starclick)

    // const addList =()=>{
    //     console.log("starclick",starclick)
    //     setShow(false)
    // }
    // useEffect(()=>{
    //     const starGet = localStorage.getItem("starclick")
    //     if(starGet && starGet.length >0){
    //         setStartClick(JSON.parse(starGet))
    //     }
        
    // },[])

    // useEffect(()=>{
    //     localStorage.setItem("starclick",JSON.stringify(starclick))
        
    // },[addList])


    const addList = () => {
        console.log("starclick", starclick);
    
        
        const savedMovies = localStorage.getItem("starclick");
        let movies = [];
    
        
        if (savedMovies) {
            movies = JSON.parse(savedMovies);
        }
    
        
        movies.push(...starclick);
    
        
        localStorage.setItem("starclick", JSON.stringify(movies));
    
        
        setShow(false);
    };
    

    return (
        
        <div>
            
            <div className='flex gap-[15px] items-center bg-[#293234] border-[2px] border-[solid] border-[#293234]'>
                <div className='w-[100px]'>
                    <img className='w-[100%]' src={filterMovie?.Poster} alt="" />
                </div>
                <div className='flex flex-col gap-[5px]'>

                    <h1 className='text-white text-[20px] font-bold'>{filterMovie.Genre}</h1>
                    <p className='text-white '>{filterMovie.Released}. {filterMovie.Runtime}</p>
                    <p className='text-white'></p>
                    <p className='text-white flex items-center gap-[5px]'> <FaStar className='text-yellow-500 bg-[yellow]' /> <span>{filterMovie.imdbRating} IMDb rating</span></p>

                </div>
            </div>

            <div className='flex items-center flex-col py-[10px]  bg-[#293234]  mt-[25px] justify-center w-[250px] mx-auto rounded-lg cursor-pointer'>
                <div  className='flex justify-center p-[15px]   '>

                    {
                        starBar.map((star, index) => {
                            return (

                                <span onClick={() => startHandler(index + 1, filterMovie)} key={index} className='text-white'>{star}</span>

                            )
                        })
                        
                        
                    }
                    {
                        startLength && starclick.map((star, index) => {
                            return (
                                <span key={index} className='text-white'>{star.index}</span>
                            )
                        })
                    }
                    
                </div>
                <div className='flex w-[200px]'>
                    {
                        startLength && <button onClick={ addList}  className='flex w-[100%] items-center justify-center gap-[5px] text-white p-[10px] bg-[#5a37d1] border-[1px] border-[solid] border-[#5a37d1] rounded-lg'><FaPlus /> Add to List</button>
                    }
                </div>
                
            </div>

            <div className='mt-[25px] w-[250px] mx-auto '>
                <p className='text-white'>{filterMovie.Plot}</p>

                <p className='text-white mt-[10px] mb-[10px]'>{filterMovie.Actors}</p>
                <p className='text-white'>Directed by {filterMovie.Writer}</p>
            </div>
        </div>

    )
}

export default SelectMovie
