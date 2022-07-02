import PokemonShow from '../Components/PokemonShow';
import CombatePokemon from '../Components/CombatePokemon';
import './App.css';
import IndexPokemon from '../Components/IndexPokemon';
import { EstadisticPokemon, Nombre } from '../Components/EstadisticPokemon';

import { Route, Routes } from 'react-router-dom';
import { Hooks } from '../Components/Hooks';

function App() {

  return (
    <>
      <Routes>
        <Route exac path='/*' element={<IndexPokemon />} />
      </Routes>
      <Routes>
        <Route exac path='/Pokemon' element={<PokemonShow />} />
      </Routes>

      <Routes>
        <Route exac path='/Combate' element={<CombatePokemon />} />
      </Routes>

      <Routes>
        <Route exac path='/libro-pokemon' element={<EstadisticPokemon />}></Route>
      </Routes>

      <Routes>
        <Route exac path={'/libro-pokemon/:nombre'} element={<Nombre />} />
      </Routes>

      <Routes>
        <Route exac path={'/hooks'} element={<Hooks />} />
      </Routes>

    </>

  );
}

export default App;
