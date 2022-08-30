import './Topbar.scss';
import React from 'react'
import logo from '../../assets/pokemonPNG.png'
import {Link} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';
import PokeFilter from '../PokeFilter/PokeFilter';
import PokeOrder from '../PokeOrder/PokeOrder';
import { useDispatch } from 'react-redux';
import { restartPokemon } from '../../redux/actions';

const Topbar = () => {
  const dispatch = useDispatch();


  const handleClick=()=>{
    dispatch(restartPokemon())
  }


  return (
    <div className='topbar'>
            <div className="left">
                <a href={'/pokemons'} className='logo'><img className='logo' src={logo} alt="LOGO" /></a>
                <div className='filter-container'>
                  <PokeFilter/>
                </div>
                <div className="order-container">
                  <PokeOrder/>
                </div>
            </div>
            <div className="right">
            <Link   to={'/pokemons'} ><button className='home-btn' onClick={handleClick}>HOME</button></Link> 
            <Link   to={'/create_pokemon'} ><button className='home-btn create'>CREATE POKEMON!</button></Link> 
                <SearchBar/>
            </div>
    </div>
  )
}

export default Topbar