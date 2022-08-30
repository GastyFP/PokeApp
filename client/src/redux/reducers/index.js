import {GET_POKEMONS,GET_POKEMON_DETAIL,SEARCH_POKEMON,GET_TYPES, RESTART_POKEMON, FILTER_BY_TYPE , FILTER_BY_CREATION, FILTER_BY_API , SORT_ALPHABETICAL , SORT_BY_ATTACK, PAGINATION_RESET,PAGINATION_CHANGE, RESTART_DETAIL} from '../actions/index'
import {ASCENDANT} from '../../constantes/index'

const initialState = {
    pokemons:[],
    filtered_pokemons:[],
    pokemonDetail:{},
    types: [],
    pagination : 1
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
        case GET_TYPES:
                return{
                    ...state,
                    types: action.payload
                }

        case SEARCH_POKEMON:
            return{
                ...state,
                filtered_pokemons: state.pokemons.filter(p=>p.name === action.payload.name) 
            }

        case RESTART_POKEMON:{
            return{
                ...state,
                filtered_pokemons:[]
            }
        }
        case RESTART_DETAIL:{
            return{
                ...state,
                pokemonDetail:{}
            }
        }

        case FILTER_BY_TYPE:{
            //issues with types when created / type when comes from API
            return{
                ...state,
                filtered_pokemons: state.pokemons.filter(p=>
                    p.created ? p.types.length > 1 ? 
                    p.types[0].name === action.payload || p.types[1].name === action.payload
                    :p.types[0].name === action.payload
                    :
                    p.type.length > 1 ?
                    p.type[0].name === action.payload || p.type[1].name === action.payload
                    :
                    p.type[0].name === action.payload
                ) 
            }
        }
        case FILTER_BY_CREATION:{
            return{
                ...state,
                filtered_pokemons: state.pokemons.filter(p=> p.created === true)
            }
        }
        case FILTER_BY_API:{
            return{
                ...state,
                filtered_pokemons: state.pokemons.filter(p=> p.created !== true)
            }
        }

        
        case SORT_ALPHABETICAL:{
            let ordered_pokemons = [...state.pokemons]
            ordered_pokemons = ordered_pokemons.sort((a,b)=>{
                if(a.name < b.name){
                    return action.payload === ASCENDANT ? -1 : 1
                }
                if(a.name > b.name){
                    return action.payload=== ASCENDANT ? 1 : -1
                }
                return 0
            })

            return{
                ...state,
                filtered_pokemons: ordered_pokemons
            }
        }

        case SORT_BY_ATTACK:{
            let ordered_pokemons = [...state.pokemons]
            ordered_pokemons = ordered_pokemons.sort((a,b)=>{
                if(a.atk < b.atk){
                    return action.payload === ASCENDANT ? -1 : 1
                }
                if(a.atk > b.atk){
                    return action.payload=== ASCENDANT ? 1 : -1
                }
                return 0
            })
            return{
                ...state,
                filtered_pokemons: ordered_pokemons
            }
        }
        case PAGINATION_RESET:{
            return{
                ...state,
                pagination: 1
            }
        }
        case PAGINATION_CHANGE:{
            return{
                ...state,
                pagination: action.payload
            }
        }
        
        default: return state
    }
}