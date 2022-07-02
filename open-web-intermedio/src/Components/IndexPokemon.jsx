import React from 'react';
import NavLink from '../Services/NavLink';

const IndexPokemon = () => {
  return (
    <div className='indexpokemon-wrapper'>
      <h1>!Bienvenido al mundo pokemon¡</h1>
      <h3>¿Que deseas hacer?</h3>
      <div className='indexpokemon-navigation'>
        {/* Se puede poner de las dos formas */}
        <NavLink to={'/Pokemon'}>Elegir Pokemon</NavLink>
        <NavLink to={'/Combate'} children={'Combatir'} />
        <NavLink to={'/libro-pokemon'} children={'Libro pokemon'} />
        <NavLink to={'/hooks'}>Probando hooks</NavLink>
      </div>
    </div>
  )
}

export default IndexPokemon