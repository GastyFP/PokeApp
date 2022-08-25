import './PokeFilter.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { filterByType,filterByCreation, filterByApi } from '../../redux/actions';



const PokeFilter = () => {
  const types = useSelector((state)=>state.types)
  const dispatch = useDispatch()


  const handleSelect = (e)=>{
    e.preventDefault();
    // console.log('FILTER',e.target.value)
    dispatch(filterByType(e.target.value))
  }
  const handleFilterCreated = () =>{
    dispatch(filterByCreation())
  }
  const handleFilterApi = ()=>{
    dispatch(filterByApi())
  }


  return (
        types.length > 0 &&
    <div className='filter-container'>
        <label>Filter by Creation or API: </label>
        <button onClick={handleFilterCreated}>Created</button>
        <button onClick={handleFilterApi}>API</button>
        <label>Filter by Type: </label>
        <select name="typeId" id="typeId" onChange={(e)=>handleSelect(e)}>
            {
              types.map(t=>(
                <option key={t.id} value={t.name}>{t.name}</option>
              ))
            }
        </select>
    </div>
  )
}

export default PokeFilter