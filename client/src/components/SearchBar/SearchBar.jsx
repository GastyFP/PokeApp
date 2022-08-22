
import React from 'react'
import { useState } from 'react'
import './SearchBar.scss'
import {useDispatch} from 'react-redux'
import {getPokemons, searchPokemon} from '../../redux/actions'


const SearchBar = () => {
    const [search,setSearch]= useState('')
    let dispatch = useDispatch();

function handleSubmit(e){
    e.preventDefault();
    if(!search) dispatch(getPokemons())
     dispatch(searchPokemon(search));
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