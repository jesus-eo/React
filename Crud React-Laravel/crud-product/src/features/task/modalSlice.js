import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    visibility: false,
    accion: '',
    texto: ''   /* Eliminada, creada, editada */
}

/* Muestro modal  y cierro cuando pulso X  */
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state, action) => {
            const {accion, texto} = action.payload;
            if (accion === 'close') {
                state.visibility = false
            }else {
                state.visibility = true
                state.accion = accion
                state.texto = texto 
            }
        }
    }
})

/* Exportamos las funciones que podemos utilizar */
export const { showModal } = modalSlice.actions

/* Aqui exportamos la propiedad reducer que utilizamos en el store(contexto) */
export default modalSlice.reducer