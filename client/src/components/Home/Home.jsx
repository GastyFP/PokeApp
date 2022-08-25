import React from "react";
import './Home.scss'
import { useEffect } from "react";
import {useSelector , useDispatch} from 'react-redux'
import {getPokemons} from '../../redux/actions/index'
import PokemonCard from "../PokemonCard/PokemonCard";
import Spinner from "../Spinner/Spinner";

const Home = () =>{
    let pokemons = useSelector((state)=>state.pokemons)
    let searched_pokemon = useSelector((state)=>state.filtered_pokemons)
    let pokemons_copy = [];
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons())
    },[])

    // copy the array with the needed info, when is ok, it loads.
    // if not... loads spinner.
    pokemons_copy = pokemons.slice(0)  

    console.log(searched_pokemon)


    //im doing conditional rendering because of the "type" property.
    //In API the name is "type" but in DB because of sequelize pluralizing, its "types"
    //so i ask if pokemon.created is true 

    return(
        //if u search,it renders the pokmn
        pokemons_copy.length > 0 ? searched_pokemon.length > 0 ? 
    <div className="pokemon-conteiner">
        <div className="all-container">
            {
               searched_pokemon.map(p=>(
                p.created ?
                <PokemonCard key={p.id} id={p.id} image={p.image} name={p.name} type={p.types.map(t=>t.name)} />:
                <PokemonCard key={p.id} id={p.id} image={p.image} name={p.name} type={p.type.map(t=>t.name)} />
               )) 
            }

        </div>
    </div>
    : //if u dont search, it renders all pokemons
    <div className="pokemon-conteiner">
        <div className="all-container">
            { pokemons_copy.map(p=>(
                p.created ?
                <PokemonCard key={p.id} id={p.id} image={p.image} name={p.name} type={p.types.map(t=>t.name)} />:
                <PokemonCard key={p.id} id={p.id} image={p.image} name={p.name} type={p.type.map(t=>t.name)} />
            ))
            }
        </div>
    </div>: <Spinner/>
    )
}
export default Home