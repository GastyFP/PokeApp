import React from 'react'
import './PokemonCard.scss'

const PokemonCard = (props) => {
  return (
    <div className='card-container' >
        <div className="image-container">
          <img src={props.image} alt="PokemonCard" />
        </div>
        <div className="card-content">
            <div className="card-title">
              <h3>{props.name}</h3>
            </div>
            <div className="card-body">
              <p>Type: </p><span>{props.type}</span>
            </div>
        </div>
        <div className="btn">
          <button><a>Details</a></button>
        </div>
        
    </div>
  )
}
export default PokemonCard