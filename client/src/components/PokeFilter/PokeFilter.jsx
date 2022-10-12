import './PokeFilter.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByType,filterByCreation, filterByApi,pagReset } from '../../redux/actions';



const PokeFilter = () => {
  const types = useSelector((state)=>state.types)
  const dispatch = useDispatch()


  const handleSelect = (e)=>{
    e.preventDefault();
    // console.log('FILTER',e.target.value)
    dispatch(pagReset());
    dispatch(filterByType(e.target.value))
  }
  const handleFilterCreated = () =>{
    dispatch(pagReset());
    dispatch(filterByCreation())
  }
  const handleFilterApi = ()=>{
    dispatch(pagReset());
    dispatch(filterByApi())
  }



  return (
        types.length > 0 &&
    <div className='filter-items'>
      <div className="filter-created">
        <label>Filter by: </label>
        <button onClick={handleFilterCreated}>Created</button>
        <button onClick={handleFilterApi}>API</button>
      </div>
      <div className="filter-type">
        <label>Type: </label>
        <select name="typeId" id="typeId" onChange={(e)=>handleSelect(e)}>
            {
              types.map(t=>(
                <option key={t.id} value={t.name}>{t.name}</option>
              ))
            }
        </select>
      </div>
    </div>
  )
}

export default PokeFilter