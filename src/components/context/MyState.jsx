import mycontext from "./myContext";

import React, { useEffect, useState } from 'react'

const MyState = ({ children }) => {

    const [movie,setMovies] = useState([])
    const [search,setSearch] = useState("")
    const [loader,setLoader] = useState(false)
    

    useEffect(() => {

        setLoader(true)
        fetch(`https://www.omdbapi.com/?apikey=2a6626ef&s=${search}`)
        .then(res => res.json())
        .then(data => setMovies(data.Search))
        .then(() => setLoader(false))
        .catch(err => console.log(err))

    }, [search])

    return (
        <mycontext.Provider value={{movie,search,setSearch,loader}}>
            {children}
        </mycontext.Provider>
    )
}

export default MyState
