import React from 'react'
import { Link, useParams } from 'react-router-dom'

/* Esto seria un componente pero para probar lo he creado aqui */
export const Nombre = () => {
    const {nombre} = useParams();
    return <>
        <p style={{color: 'white'}}>El nombre del pokemon elegido es: {nombre}</p>  
        </>        
}

export function EstadisticPokemon() {
    const pokemons = [
        'picachu',
        'pidgeot',
        'charizard',
    ];
    
    return (
        <div style={{color: 'white'}}>
            <h1>Elige un pokemon para ver sus estadísticas:</h1>
            <p>(Ejercicio pasando parámetros en la ruta)</p>
            <ul>
                {pokemons.map((pokemon) => {
                    return <li key={pokemon}><Link to={`${pokemon}`}>{pokemon}</Link>
                    </li>})
                }
            </ul> 
                 
        </div>
    )
}

