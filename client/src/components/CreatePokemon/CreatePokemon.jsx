import './CreatePokemon.scss';
import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postPokemon } from '../../redux/actions';
import DetailSpinner from "../../components/DetailSpinner/DetailSpinner";
// import { DEFAULT_CARD_IMG } from '../../constantes';

const CreatePokemon = () => {
    const types = useSelector((state)=>state.types)
    const dispatch = useDispatch()
    const [errors , setErrors] = useState({})
    const [newPokemon, setnewPokemon] = useState({
        name: '',
        hp: 1,
        atk: 1,
        def: 1,
        spd: 1,
        height: 1,
        weight: 1,
        image: undefined,
        type1: 1,
        type2: 0,
        typeId: []
    })

///*******************VALIDATE FUNCTION *******************************/

    const validate = (pokemon)=>{
        let errors = {}
        console.log('VALIDATE',pokemon)
        if(!pokemon.name){
            errors.name = 'Name is required'
        }else{
            if(!/^[a-zA-Z]+$/g.test(pokemon.name)){
                errors.name = 'Only letters are valid'
            }else{
                if(!/^.{3,13}$/.test(pokemon.name)){
                    errors.name = 'Min 3 letters, Max is 13'
                }
            }
        }

        if(!pokemon.hp){
            errors.hp = 'Health must be at least 1'
        }else if(!/^[1-9].{0,2}$/.test(pokemon.hp)){
        errors.hp = ' Health must be a positive number between 1 and 999'
        }
        if(!pokemon.atk){
                errors.atk = 'Attack must be at least 1'
        }else if(!/^[1-9].{0,2}$/.test(pokemon.atk)){
            errors.atk = ' Attack must be a positive number between 1 and 999'
        }
        if(!pokemon.def){
            errors.def = 'Defense must be at least 1'
        }else if(!/^[1-9].{0,2}$/.test(pokemon.def)){
        errors.def = ' Defense must be a positive number between 1 and 999'
        }
        if(!pokemon.spd){
            errors.spd = 'Speed must be at least 1'
        }else if(!/^[1-9].{0,2}$/.test(pokemon.spd)){
        errors.spd = ' Speed must be a positive number between 1 and 999'
        }
        if(!pokemon.height){
            errors.height = 'Height must be at least 1'
        }else if(!/^[1-9].{0,2}$/.test(pokemon.height)){
        errors.height = ' Height must be a positive number between 1 and 999'
        }
        if(!pokemon.weight){
            errors.weight = 'Weight must be at least 1'
        }else if(!/^[1-9].{0,2}$/.test(pokemon.weight)){
        errors.weight = ' Weight must be a positive number between 1 and 999'
        }
        console.log('TYPE2',pokemon.type2)
        if(pokemon.type2 === pokemon.type1){
            errors.type = 'The two types must be different'
        }
        console.log(errors)
        return errors
    }
///*******************END OF VALIDATE *******************************/

//*******************HANDLERS************************************* */

    function handleChange(e){
        setnewPokemon((newPokemon)=> {
            return{
                ...newPokemon,
                [e.target.name]:e.target.value
            }
        })
        let objError = validate({...newPokemon,[e.target.name]:e.target.value});
        setErrors(objError);
    }

    function handleSelect(e){
        e.preventDefault(); 
        setnewPokemon({
            ...newPokemon,
            [e.target.name]: e.target.value
        })
        let objError = validate({...newPokemon,[e.target.name]:e.target.value});
        setErrors(objError);
    }

    function handleSubmit(e){
        e.preventDefault();
        setnewPokemon({
            ...newPokemon,
            typeId: [newPokemon.type1,newPokemon.type2]
        })
        dispatch(postPokemon(newPokemon))
    }
//*******************END OF HANDLERS************************************* */

  return (
    types.length > 0 ?
    <div className='form-box'>
        <h5>Create your own Pokemon! </h5>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" id="name" value={newPokemon.name} onChange={(e)=>handleChange(e)} />
                {errors.name && <span style={{color:'red'}} >{errors.name}</span>}
                <br />
            <label>Health:</label>
            <input type="number" name="hp" id="hp" value={newPokemon.hp} onChange={(e)=>handleChange(e)} />
                {errors.hp && <span style={{color:'red'}} >{errors.hp}</span>}
                <br />
            <label>Attack:</label>
            <input type="number" name="atk" id="atk" value={newPokemon.atk} onChange={(e)=>handleChange(e)} />
                {errors.atk && <span style={{color:'red'}} >{errors.atk}</span>}
                <br />
            <label>Defense:</label>
            <input type="number" name="def" id="def" value={newPokemon.def} onChange={(e)=>handleChange(e)} />
                {errors.def && <span style={{color:'red'}} >{errors.def}</span>}
                <br />
            <label>Speed:</label>
            <input type="number" name="spd" id="spd" value={newPokemon.spd} onChange={(e)=>handleChange(e)} />
                {errors.spd && <span style={{color:'red'}} >{errors.spd}</span>}
                <br />
            <label>Height:</label>
            <input type="number" name="height" id="height" value={newPokemon.height} onChange={(e)=>handleChange(e)} />
                {errors.height && <span style={{color:'red'}} >{errors.height}</span>}
                <br />
            <label>Weight:</label>
            <input type="number" name="weight" id="weight" value={newPokemon.weight} onChange={(e)=>handleChange(e)} />
                {errors.weight && <span style={{color:'red'}} >{errors.weight}</span>}
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
                <option value={0}>---</option>
               {
                types.map(t=>(
                    <option disabled={ newPokemon.type1 == 1 ? true:false} key={t.id} value={t.id}>{t.name}</option>
                ))
               }
            </select>
            <br />
                {errors.type && <span style={{color:'red'}} >{errors.type}</span>}
            <br /><br />
            <label>Select an image for your pokemon via URL!</label>
            <p style={{fontSize: '13px', color: 'blue'}}>Copy the link of an image you like here! Be sure the link is correct, otherwise it wont work :S </p>
            <input type="text" name='image'id='image'placeholder='Paste URL here...' onChange={(e)=>handleChange(e)} />
            <br />
            <button className='createBtn' disabled={newPokemon.name ? Object.keys(errors).length > 0 ? true : false: true} type="submit">Create Pokemon!</button>
        </form>
    </div>: <DetailSpinner/>
  )
}

export default CreatePokemon