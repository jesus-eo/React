import PokemonShow from '../Components/PokemonShow';
import CombatePokemon from '../Components/CombatePokemon';
import './App.css';
import IndexPokemon from '../Components/IndexPokemon';
import { EstadisticPokemon, Nombre } from '../Components/EstadisticPokemon';

import { Route, Routes } from 'react-router-dom';
import { Hooks } from '../Components/Hooks';
import { createContext } from 'react';
import { useState } from 'react';

/*Creamos contexto donde en el guardaremos un valor(prop) para después acceder a el desde cualquier componente que envuelva a ese contexto*/
export const userContext = createContext();

function App() {
  const [user, setUser] = useState('Pepillo');
  
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

      <userContext.Provider value={user}>
      <Routes>
        <Route exac path={'/hooks'} element={<Hooks />} />
      </Routes>
      </userContext.Provider>

    </>

  );
}

export default App;
