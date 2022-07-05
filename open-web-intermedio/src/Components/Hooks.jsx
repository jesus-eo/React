import React, { useReducer } from 'react'
import { useContext } from 'react';
import { useRef, useState, useEffect, useMemo } from 'react';
import { userContext } from '../Pages/App';

export const Hooks = () => {
    const [cont, setCont] = useState(0);

    /* Se renderiza solo la primera vez si le ponemos los [], podemos indicarle un parámetro dentro para que se ejecute cuando ese parámetro cambie de estado */
    useEffect(() => {
        setCont(c => c + 1);
    }, []);

    const [textInput, setTextInput] = useState();
    const valorRef = useRef();

    /*El useMemo se usa para cuando tenemos una función que consume muchos recursos y que remos invocarla cada vez que algúna variable cambie en este caso el dependencia*/
    const multliplica = (a, b) => a * b;
    const memoMulti = useMemo(() => multliplica(2, 2), [])

    /* Recibir información del contexto creado */
    const user = useContext(userContext)

    /**useReduce: dispatch-> función cambia el estado. reducer->Seria la lógica. initialState->estado inicial;*/
    const initialState = {
        count: 0,
        countInterval: 0,
        incrementar: true
    };

    /**
     * 
     * @param {seria el initalState} state 
     * @param {objet El parámetro que pasemos al llamar a dispatch} action 
     */
    const reducer = (state, action) => {
        switch (action.type) {
            case 'Incrementar':
                if (!isNaN(state.countInterval)) {
                    return {
                        ...state,
                        count: state.count + state.countInterval
                    }
                };
            case 'Decrementar':
                if (!isNaN(state.countInterval)) {
                    return {
                        ...state,
                        count: state.count - state.countInterval
                    }
                };

            case 'interval':
                return {
                    ...state,
                    countInterval: action.value
                };
            case 'toogleIncrement':
                return {
                    ...state,
                    incrementar: !state.incrementar
                }

            default:
                break;
        }
    };
    /**
     * Crea el hook reduce con el estado inicial
     * reducer-> Se llama a esa función cuando invocamos a dispatch, la función reduce suele serun switch que es el encargado de cambiar el state.
     */
    const [state, dispatch] = useReducer(reducer, initialState);
    const updateInterval = (value) => dispatch({ type: 'interval', value: parseInt(value) });
    const toogleIncrement = () => dispatch({ type: 'toogleIncrement' });


    return (
        <div style={{ color: 'white' }}>

            <h1 style={{color:'red'}}>Probando Hooks:</h1>
            <h3>useContext</h3>
            <h4>Nombre:{user}</h4>
            <br />

            <h3>useEffect</h3>
            <p>Contador: {cont}</p>
            <br />
            
            <h3>useRef</h3>
            <p>Texto input: {textInput}</p>
            <input type="text" ref={valorRef} />
            <button onClick={() => setTextInput(valorRef.current.value)}>Ver valor(ref)</button>
            <br />
            <br />
            <h3>useMemo</h3>
            <p>useMemo:{memoMulti}</p>
            <br />

            <h3>useReduce</h3>
            <p>{'Cuenta:' + state.count}</p>
            <input onChange={() => { toogleIncrement() }}
                type="checkbox"
                id="chk"
                defaultChecked={state.incrementar} />
            <label htmlFor='chk'>{state.incrementar ? 'Incrementar' : 'Decrementar'}</label>
            <br />
            <label htmlFor="inputText">Intervalo:</label>
            <input type="text" name="" id="inputText" onChange={(e) => updateInterval(e.target.value)} />
            <button onClick={() => dispatch({ type: state.incrementar ? 'Incrementar' : 'Decrementar' })}>{state.incrementar ? 'Incrementar' : 'Decrementar'}</button>
            <br />
        </div>
    )
}
