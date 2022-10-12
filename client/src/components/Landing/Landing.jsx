import React from 'react'
import pokeImage from '../../assets/pokemonPNG.png'
import backgroundImg from '../../assets/background.gif'
import './Landing.scss'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
      <div className='container'>
        <img className='logo' src={pokeImage} alt="pokeIMAGE" />
        <Link to={"/pokemons"}><button className='landing-btn'> Ingresar</button></Link>
        <img className='background' src={backgroundImg} alt="BACKGROUND" />
    </div>
  )
}

export default Landing