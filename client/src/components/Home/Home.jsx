import React from "react";
import { useEffect } from "react";
import {useSelector , useDispatch} from 'react-redux'
import {getPokemons} from '../../redux/actions/index'
import PokemonCard from "../PokemonCard/PokemonCard";
import Spinner from "../Spinner/Spinner";



const Home = () =>{
    let pokemons = useSelector((state)=>state.pokemons)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons())
    },[])
    //CONSIDERANDO BORRAR HOME, BUSCAR COMO ARMAR BIEN UN CONTAINER PARA LAS CARDS MAPEADAS
    //SERA UN PROBlEMA DE LAS CARTAS? I DON NOUUUU
    // useless spinner, pokemons get fast. mapping real info is the issue.

    return(
        <div className="home-conteiner">
            {pokemons.map(p=>(
                    <PokemonCard key={p.id} name={p.name} image={p.image} type={p.type.map(t=>t.name)}/>
            ))
            }
        </div>
    )
}
export default Home