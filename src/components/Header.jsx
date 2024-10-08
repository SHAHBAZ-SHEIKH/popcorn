import React,{useContext} from 'react'
import mycontext from './context/myContext'



const Header = () => {

    const {search,setSearch,movie} = useContext(mycontext)
    console.log(search)


    return (
        <div className='w-full flex justify-between items-center bg-[#5a37d1] px-[10px] h-[90px] '>
            <div className='flex items-center'>
                <img className='w-[80px]' src="/popcorn.png" alt="image" />
                <h1 className='text-3xl font-bold text-white'>usePopcorn</h1>
            </div>
            <div>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className='w-[300px] h-[30px] rounded-lg p-[20px] border-none outline-none ' type="text" placeholder="Search" />
            </div>
            <div>
                <p className='text-white'>Found {movie?.length} top results</p>
            </div>
        </div>
    )
}

export default Header
