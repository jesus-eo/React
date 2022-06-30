import React from 'react'
import PropTypes from 'prop-types'
import './Pokemon.css'
import ClassName from 'classnames'
/**
 * Muestra los pokemon que estan en la pokedex(elegidos)
 * @param {dataPokemon} array con todos los pokemon 
 * @returns 
 */
function PokemonData({ dataPokemon, mostrarPokedex }) {
    return (
        <div className={ClassName(mostrarPokedex ? 'dataPokemon-container-wrapper' : 'ocultar-pokedex')}>
            {dataPokemon.map((pokemon) => {
                if (pokemon.id) {
                    return <div className='dataPokemon-container-card' key={pokemon.id}>
                        <img src={pokemon.sprites.front_default} alt="Imagen Pokemon" />
                        <ul className='dataPokemon-card_ul'>
                            <li>Nombre: {pokemon.name}</li>
                            <li>Habilidades: {pokemon.abilities.map((ability) => {
                                return <ul key={pokemon.id}><li>{ability.ability.name}</li></ul>
                            })}
                            </li>
                        </ul>
                    </div>
                }
                return ""
            })}
        </div>
    )
}

PokemonData.propTypes = {
    dataPokemon: PropTypes.array.isRequired,
    mostrarPokedex: PropTypes.bool
}

export default PokemonData
