import './CreatePokemon.scss';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postPokemon } from '../../redux/actions';

const CreatePokemon = () => {
    const types = useSelector((state)=>state.types)
    const dispatch = useDispatch()
    const [newPokemon, setnewPokemon] = useState({
        name: '',
        hp: 1,
        atk: 1,
        def: 1,
        spd: 1,
        height: 1,
        weight: 1,
        image: undefined,
        type1: [1],
        type2: [],
        typeId: []
    })

    if(types.length>0){
        console.log(types) //control de que types esta cargado
    }

    function handleChange(e){
        e.preventDefault();
        setnewPokemon({
            ...newPokemon,
            [e.target.name]:e.target.value
        })
        console.log(newPokemon);
    }

    function handleSelect(e){
        e.preventDefault(); //esto ok?? check
        setnewPokemon({
            ...newPokemon,
            [e.target.name]:[e.target.value]
        })
        console.log(newPokemon);
    }

    function handleSubmit(e){
        e.preventDefault();
        setnewPokemon({
            ...newPokemon,
            typeId: [...newPokemon.type1,...newPokemon.type2]
        })
        dispatch(postPokemon(newPokemon))
    }

    //los types en el estado local inicial tiene que ser un array
    //tengo los options con los ID vamos por el state,los errors, los handle
  return (
    types.length > 0 ?
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" id="name" onChange={(e)=>handleChange(e)} />
            <label>Health:</label>
            <input type="number" name="hp" id="hp" onChange={(e)=>handleChange(e)} />
            <label>Attack:</label>
            <input type="number" name="atk" id="atk" onChange={(e)=>handleChange(e)} />
            <label>Defense:</label>
            <input type="number" name="def" id="def" onChange={(e)=>handleChange(e)} />
            <label>Speed:</label>
            <input type="number" name="spd" id="spd" onChange={(e)=>handleChange(e)} />
            <label>Height:</label>
            <input type="number" name="height" id="height" onChange={(e)=>handleChange(e)} />
            <label>Weight:</label>
            <input type="number" name="weight" id="weight" onChange={(e)=>handleChange(e)} />
            <br /><br />
            <label>Select up to 2 types!</label>
            <select name="type1" id="type1" onChange={(e)=>handleSelect(e)}>
               {
                types.map(t=>(
                    <option key={t.id} value={t.id} >{t.name}</option>
                ))
               }
            </select>
            <select name="type2" id="type2" onChange={(e)=>handleSelect(e)}>
               {
                types.map(t=>(
                    <option key={t.id} value={t.id}>{t.name}</option>
                ))
               }
            </select>
            <br /><br />
            <label>Select an image for your pokemon via URL!</label>
            <input type="text" name='image' placeholder='Paste URL here...' onChange={(e)=>handleChange(e)} />
            <br /><br />
            <button type="submit">Create Pokemon!</button>
        </form>
    </div>: <h1>LOADING...</h1>
  )
}

export default CreatePokemon