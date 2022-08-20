import React from "react";
import { useSelector } from "react-redux";

const PokemonDetail = () =>{
    const pokemon = useSelector(state=>state.pokemonDetail)
    return (
        <div>
            <h1>{pokemon.name}</h1>
        </div>
    )
}

export default PokemonDetail