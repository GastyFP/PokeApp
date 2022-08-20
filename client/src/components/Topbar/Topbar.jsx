import './Topbar.scss';
import logo from '../../assets/pokemonPNG.png'
import React from 'react'
import SearchBar from '../SearchBar/SearchBar';

const Topbar = () => {
  return (
    <div className='topbar'>
            <div className="left">
                <a href={'/pokemons'} className='logo'><img className='logo' src={logo} alt="LOGO" /></a>
            </div>
            <div className="right">
                <SearchBar/>
            </div>
    </div>
  )
}

export default Topbar