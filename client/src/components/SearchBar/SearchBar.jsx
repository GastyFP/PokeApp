
import React, { useEffect } from 'react'
import { useState } from 'react'
import './SearchBar.scss'
import {useDispatch} from 'react-redux'
import {searchPokemon, restartPokemon,pagReset} from '../../redux/actions'
import { useHistory } from 'react-router-dom'



const SearchBar = () => {
    const [search,setSearch]= useState('')
    let dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
    
      return () => {
        dispatch(restartPokemon())
      }
    }, [dispatch])
    

function handleSubmit(e){
    e.preventDefault();
    if(!search) dispatch(restartPokemon())
    dispatch(pagReset());
    dispatch(searchPokemon(search,history));
}

const handleChange = (e) =>{
    setSearch(e.target.value)
}
  return (
      <div>
          <form onSubmit={handleSubmit}>
            <input id="search-box" name="q" size="40" type="text" placeholder="Search Pokemon..." onChange={handleChange} value={search}/>
            <input id="search-btn" value="Search" type="submit"/>
        </form>
    </div>
  )
}

export default SearchBar