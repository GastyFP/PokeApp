import './App.css';
import {Route} from 'react-router-dom'
import Topbar from './components/Topbar/Topbar';
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing';
import PokemonDetail from './components/PokemonDetail/PokemonDetail'
import PageNotFound from './components/PageNotFound/PageNotFound';
import { useDispatch } from 'react-redux';
import { getTypes } from './redux/actions';
import { useEffect } from 'react';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';


function App() {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTypes()) // load all types in DB
  }, [])
  

  return (
    <div className="App">
      <Route exact path='/'>
        <Landing/>
      </Route>
      <Route exact path='/pokemons'>
        <Topbar/>
        <Home/>
      </Route>
      <Route path='/pokemons/:id'>
        <Topbar/>
        <PokemonDetail/>
      </Route>
      <Route path='/create_pokemon'>
        <Topbar/>
        <CreatePokemon/>
      </Route>
    {/* utilizar useHistory de react-router para mandar los 404 en los catch al componente PageNF */}
      {/* <Route path='*'>
        <PageNotFound/>
      </Route> */}
    </div>
  );
}

export default App;
