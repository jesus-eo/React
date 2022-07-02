import React from 'react'
import { get } from '../Services/peticiones'
import { useState } from 'react';
import PokemonData from './PokemonData';
import './Pokemon.css'
import ClassName from 'classnames'
/* charizard, blastoise,pidgeot */
function PokemonShow() {

  const traerPokemon = async (nombre) => { setDataPokemon([...dataPokemon, await get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)]) };
  const [dataPokemon, setDataPokemon] = useState([]);
  const [nombre, setNombre] = useState('charizard');
  const [mostrarPokedex, setMostrarPokedex] = useState(false);

  return (
    <>
      <div className='container-wrapper'>
        <div className='pokshow-container'>
          <h1>Elige tu pokemon:</h1>
          <select className='pokshow-select-pokemon' onChange={(e) => { setNombre(e.target.value) }} name="pokemon" id="">
            <option value="charizard">Charizard</option>
            <option value="blastoise">Blastoise</option>
            <option value="pidgeot">Pidgeot</option>
          </select>
          {/*  <input
        type='text'
        value={nombre}
        onChange={(e) => { setNombre(e.target.value) }}></input> */}
          <button className='pokshow-btn-elegir' onClick={() => { traerPokemon(nombre); }}>Elegir
          </button>
          <button
            className={ClassName(!mostrarPokedex ? 'ver-pokedex' : 'ocultar-pokedex', 'pokshow-btn-pokedex')}
            onClick={() => { setMostrarPokedex(true) }}
          >Ver Pokedex
          </button>
          <button
            onClick={() => { setMostrarPokedex(false) }}
            className={ClassName(mostrarPokedex ? 'ver-pokedex' : 'ocultar-pokedex', 'pokshow-btn-pokedex')}>Ocultar Pokedex
          </button>
        </div>
        <PokemonData dataPokemon={dataPokemon} mostrarPokedex={mostrarPokedex} />
      </div>
      
    </>
  )
}


export default PokemonShow
