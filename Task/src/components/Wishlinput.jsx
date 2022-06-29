import React from 'react';
import PropTypes from 'prop-types';
/**
 * 
 * Cuando usamos funciones obtenemos las propiedades asignandolos  como parámetros de la función para después poder acceder a ellos
 */
export function Wishinput ({textInputWish, setTextInputWish}){
    return (
    <>
    <h1>My wishlist</h1>
    <fieldset>
        <legend className='wish-legend'>New wish</legend>
        <input type='text' value={textInputWish} onChange={e => {setTextInputWish(e.target.value);
        }}></input>
    </fieldset>
    </>
)};

Wishinput.propTypes = {
    textInputWish: PropTypes.string.isRequired,
};

export default  Wishinput ;