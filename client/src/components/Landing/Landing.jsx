import React from 'react'
import pokeImage from '../../assets/pokemonPNG.png'
import backgroundImg from '../../assets/background.gif'
import './Landing.scss'

const Landing = () => {
  return (
      <div className='container'>
        <img className='logo' src={pokeImage} alt="pokeIMAGE" />
        <a href="http://localhost:3000/pokemons"><button className='landing-btn'> Ingresar</button></a>
        <img className='background' src={backgroundImg} alt="BACKGROUND" />
    </div>
  )
}

export default Landing