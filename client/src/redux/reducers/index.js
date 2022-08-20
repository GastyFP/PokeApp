import {GET_POKEMONS,GET_POKEMON_DETAIL,POST_POKEMON,SEARCH_POKEMON} from '../actions/index'



const initialState = {
    pokemons:[],
    pokemonDetail:{}
}

export default function reducer(state = initialState , action){
    console.log(action.payload);
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
                pokemons: state.pokemons.filter(p=>p.name === action.payload.name) 
            }

        default: return state
    }
}