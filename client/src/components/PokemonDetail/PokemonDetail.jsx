import React, { useEffect } from "react";
import './PokemonDetail.scss';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../../redux/actions";

//im doing conditional rendering because of the "type" property.
//in API its "type". And in DB because of sequelize pluralizing, its "types"
//so i ask if pokemon.created is true 

const PokemonDetail = () =>{
    let {id} = useParams();
    let dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPokemonDetail(id))
    }, [])
    let pokemon = useSelector((state)=>state.pokemonDetail)
         console.log(pokemon)
    return(
        pokemon.name ?
    <div className={`detail-container ${pokemon.created ? pokemon.types.map(t=>t.name):pokemon.type[0].name}`} >
        <div className="image">
          <img src={pokemon.image} alt="PokemonImage" />
        </div>
        <div className="detail-content">
            <div className="detail-title">
              <h3>{pokemon.name}</h3>
            </div>
            <div className="detail-body">
                <span className="title">Id: <span className="info">{pokemon.id}</span></span>
                { pokemon.created ? 
                <span className="title">Types: <span className="info">{pokemon.types.map(t=>t.name + " ")}</span></span>
                  :
                <span className="title">Types: <span className="info">{pokemon.type.map(t=>t.name + " ")}</span></span>
                }
                <span className="title">Health: <span className="info">{pokemon.hp}</span></span>
                <span className="title">Attack: <span className="info">{pokemon.atk}</span></span>
                <span className="title">Defense: <span className="info">{pokemon.def}</span></span>
                {<span className="title">Speed: <span className="info">{pokemon.spd}</span></span>}
                <span className="title">Height: <span className="info">{pokemon.height}</span></span>
                <span className="title">Weight: <span className="info">{pokemon.weight}</span></span>
            </div>
        </div>
    </div>: <h1>LOADING</h1>


    )










}

export default PokemonDetail