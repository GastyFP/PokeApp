import {GET_POKEMONS,GET_POKEMON_DETAIL,POST_POKEMON,SEARCH_POKEMON,GET_TYPES} from '../actions/index'



const initialState = {
    pokemons:[],
    filtered_pokemons:[],
    pokemonDetail:{},
    types: [] //vamos a ver para que los uso aca
}

export default function reducer(state = initialState , action){
    
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_POKEMON_DETAIL:
            return{
                ...state,
                pokemonDetail: action.payload
            }
        case SEARCH_POKEMON:
            return{
                ...state,
                filtered_pokemons: state.pokemons.filter(p=>p.name === action.payload.name) 
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        default: return state
    }
}