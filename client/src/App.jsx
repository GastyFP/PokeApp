import './App.scss';
import {Route} from 'react-router-dom'
import Topbar from './components/Topbar/Topbar';
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing';
import PokemonDetail from './components/PokemonDetail/PokemonDetail'
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
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
      {/* <Route path='*'>
        <PageNotFound/>
      </Route> */}
    </div>
  );
}

export default App;
