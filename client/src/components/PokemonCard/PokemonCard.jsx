import React from 'react'
import './PokemonCard.scss'
import {Link} from 'react-router-dom'

const PokemonCard = (props) => {
  return (
    <div className={`card-container ${props.type[0]}`} >
        <div className="image-container">
          <img src={props.image} alt="PokemonCard" />
        </div>
        <div className="card-content">
            <div className="card-title">
              <h3>{props.name}</h3>
            </div>
            <div className="card-body">
              <p>Type: </p><span>{props.type.map((t)=>t + " ")}</span>
            </div>
        </div>
        <div className="btn">
          <Link to={`/pokemons/${props.id}`} ><button>Details</button></Link> 
        </div>
    </div>
  )
}
export default PokemonCard