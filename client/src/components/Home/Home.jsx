import React from "react";
import './Home.scss'
import { useEffect } from "react";
import {useSelector , useDispatch} from 'react-redux'
import {getPokemons,pagReset,pagChange} from '../../redux/actions/index'
import PokemonCard from "../PokemonCard/PokemonCard";
import Spinner from "../Spinner/Spinner";
import { paginator } from "../../constantes";

const Home = () =>{
    let pokemons = useSelector((state)=>state.pokemons)
    let searched_pokemon = useSelector((state)=>state.filtered_pokemons)
    let pokemons_copy = [];
    let searched_pokemon_copy = []
    // let [pag,setPag] = useState(1)
    let pag = useSelector((state)=>state.pagination)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons())
        return ()=>{
            dispatch(pagReset())
        }
    },[dispatch])

    

    // copy the array with the needed info, when is ok, it loads.
    // if not... loads spinner.

    /******************PAGINATION***************************** */
        //paginator(array,currentpag,per_pag_items)
        // const [, updateState] = React.useState();
        // const forceUpdate = React.useCallback(() => updateState({}), []);
       
    pokemons_copy = paginator(pokemons,pag,12)
    // console.log('pokemons_copy',pokemons_copy)
    searched_pokemon_copy = paginator(searched_pokemon,pag,12)
    // console.log('searched_pokemon',searched_pokemon)

   const handlePagination = (pag)=>{
    dispatch(pagChange(pag))
    // forceUpdate()
   }



/*****************END OF PAGINATION****************************** */

    /*
    data: (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    next_page: 2 //pag siguiente, si no hay null si hay num de la pag
    page: 1 //pag que esto
    per_page: 12
    pre_page: null //pag anterior, si no hay null si hay el num de la pag
    total: 48
    total_pages: 4
    */


    // console.log(searched_pokemon) //checking the array that renders when applying a filter

    //im doing conditional rendering because of the "type" property.
    //In API the name is "type" but in DB is "types" because of sequelize pluralizing,
    //so i ask if p.created is true when rendering all pokemons

    return(
        //if u search,it renders the pokmn
        pokemons_copy.data.length > 0 ? searched_pokemon_copy.data.length > 0 ? 
    <div className="pokemon-conteiner">
        <div className="all-container">
            {
               searched_pokemon_copy.data.map(p=>(
                p.created ?
                <PokemonCard key={p.id} id={p.id} image={p.image} name={p.name} type={p.types.map(t=>t.name)} />:
                <PokemonCard key={p.id} id={p.id} image={p.image} name={p.name} type={p.type.map(t=>t.name)} />
               )) 
            }
            { 
            <div>
                {searched_pokemon_copy.pre_page? <button onClick={()=>{handlePagination(searched_pokemon_copy.pre_page)}}>PREVIOUS</button>:null}
                {searched_pokemon_copy.next_page ?<button onClick={()=>{handlePagination(searched_pokemon_copy.next_page)}}>NEXT</button>:null}                    
            </div>
            }
        </div>
    </div>
    : //if u dont search, it renders all pokemons
    <div className="pokemon-conteiner">
        <div className="all-container">
            { pokemons_copy.data.map(p=>(
                p.created ?
                <PokemonCard key={p.id} id={p.id} image={p.image} name={p.name} type={p.types.map(t=>t.name)} />:
                <PokemonCard key={p.id} id={p.id} image={p.image} name={p.name} type={p.type.map(t=>t.name)} />
            ))
            }
            { 
            <div>
                {pokemons_copy.pre_page? <button onClick={()=>{handlePagination(pokemons_copy.pre_page)}}>PREVIOUS</button>:null}
                {pokemons_copy.next_page ?<button onClick={()=>{handlePagination(pokemons_copy.next_page)}}>NEXT</button>:null}                    
            </div>
            }
        </div>
    </div>: <Spinner/>
    )
}
export default Home