import axios from 'axios'
export const GET_POKEMONS = 'GET_POKEMONS';
export const POST_POKEMON = 'POST_POKEMON'; //create char
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';
export const SEARCH_POKEMON = 'SEARCH_POKEMON';
export const GET_TYPES = 'GET_TYPES';
export const RESTART_POKEMON = 'RESTART_POKEMON';
export const RESTART_DETAIL = 'RESTART_DETAIL';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const FILTER_BY_CREATION = 'FILTER_BY_CREATION';
export const FILTER_BY_API = 'FILTER_BY_API';
export const SORT_ALPHABETICAL = 'SORT_ALPHABETICAL';
export const SORT_BY_ATTACK = 'SORT_BY_ATTACK';
export const PAGINATION_RESET = 'PAGINATION_RESET';
export const PAGINATION_CHANGE = 'PAGINATION_CHANGE'; 



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
export const searchPokemon = (name,history) =>{
    return function (dispatch){
        axios.get(`http://localhost:3001/api/pokemons?name=${name}`)
        .then(pokemons=>{
            dispatch({
                type: SEARCH_POKEMON,
                payload: pokemons.data
            })
        })
        .catch(err=>{
            history.push("/error")
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

export const restartPokemon = () =>{
    return function (dispatch){
            dispatch({
                type: RESTART_POKEMON
            })
    }
}

export const restartDetail = ()=>{
    return{
        type: RESTART_DETAIL
    }
}


export const postPokemon = (pokemon) =>{
    let ids = []
    // eslint-disable-next-line
    if(pokemon.type2 == 0){
        // console.log('entre IF',pokemon)
        ids = [pokemon.type1]
    }else{
        // console.log('entre ELSE',pokemon)
        ids = [pokemon.type1,pokemon.type2]
    }
    // console.log('ACTIONS post IF',ids)

    return function(){
        axios.post(`http://localhost:3001/api/pokemons`,{
            name: pokemon.name,
            hp: pokemon.hp,
            atk: pokemon.atk,
            def: pokemon.def,
            spd: pokemon.spd,
            height: pokemon.height,
            weight: pokemon.weight,
            image: pokemon.image,
            typeId: [...ids]
        })
        .then(response=>{
            if(response.status === 201) {
                alert('Pokemon Created!')
            }
        })
        .catch(err=>{
            console.log(err)
        })
        
    }

}

export const filterByType = (typeName) =>{
    //  console.log('ACTION',typeName)
    return function (dispatch){
            dispatch({
                type: FILTER_BY_TYPE,
                payload: typeName
            })
    }
}
export const filterByCreation =()=>{
    return function(dispatch){
        dispatch({
            type: FILTER_BY_CREATION
        })
    }
}
export const filterByApi =()=>{
    return function(dispatch){
        dispatch({
            type: FILTER_BY_API
        })
    }
}

export const sortAlphabetical = (order)=>{
    return{
        type: SORT_ALPHABETICAL,
        payload: order
    }

}

export const sortByAttack = (order)=>{
    return{
        type: SORT_BY_ATTACK,
        payload: order
    }
}

export const pagReset = () =>{
    return{
        type: PAGINATION_RESET
    }
}

export const pagChange = (page)=>{
    return{
        type: PAGINATION_CHANGE,
        payload: page
    }
}




