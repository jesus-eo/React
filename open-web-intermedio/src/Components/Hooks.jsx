import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { useEffect } from 'react'

export const Hooks = () => {
    const [cont, setCont] = useState(0);

    /* Se renderiza solo la primera vez si le ponemos los [], podemos indicarle un parámetro dentro para que se ejecute cuando ese parámetro cambie de estado */
    useEffect(() => {
        setCont(c => c + 1);
    }, []);

    const [textInput, setTextInput] = useState();
    const valorRef = useRef();

    return (
        <div style={{ color: 'white' }}>
            <h1>Probando Hooks:</h1>
            <p>Contador: {cont}</p>
            <p>Texto input: {textInput}</p>
            <input type="text" ref={valorRef} />
            <button onClick={() => setTextInput(valorRef.current.value)}>Ver valor(ref)</button>
        </div>
    )
}
