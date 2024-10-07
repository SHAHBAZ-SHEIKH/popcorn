import mycontext from "./myContext";

import React, { useEffect, useState } from 'react'

const MyState = ({ children }) => {

    const [movie,setMovies] = useState([])
    const [search,setSearch] = useState("")
    

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=2a6626ef&s=interstellar`)
        .then(res => res.json())
        .then(data => setMovies(data.Search))
        .catch(err => console.log(err))

    }, [])

    return (
        <mycontext.Provider value={{movie,search,setSearch}}>
            {children}
        </mycontext.Provider>
    )
}

export default MyState
