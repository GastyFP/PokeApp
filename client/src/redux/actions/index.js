import axios from 'axios'
export const GET_POKEMONS = 'GET_POKEMONS';
export const POST_POKEMON = 'POST_POKEMON'; //create char
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';
export const SEARCH_POKEMON = 'SEARCH_POKEMON';
export const GET_TYPES = 'GET_TYPES';


export const getPokemons = () =>{
    return function (dispatch){
        axios.get('http://localhost:3001/api/pokemons')
        .then(pokemons=>{
            dispatch({
                type: GET_POKEMONS,
                payload: pokemons.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const getPokemonDetail = (ID) =>{
    return function (dispatch){
        axios.get(`http://localhost:3001/api/pokemons/${ID}`)
        .then(pokemons=>{
            dispatch({
                type: GET_POKEMON_DETAIL,
                payload: pokemons.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const searchPokemon = (name) =>{
    return function (dispatch){
        axios.get(`http://localhost:3001/api/pokemons?name=${name}`)
        .then(pokemons=>{
            dispatch({
                type: SEARCH_POKEMON,
                payload: pokemons.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const getTypes = ()=>{
    return function (dispatch){
        axios.get(`http://localhost:3001/api/types`)
        .then(types =>{
            dispatch({
                type: GET_TYPES,
                payload: types.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}




export const postPokemon = () =>{

}



