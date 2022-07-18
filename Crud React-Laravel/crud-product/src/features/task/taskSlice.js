import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        task: 'Hacer la cama',
        description: 'Cuando te levantes por la mañana hacer la cama'
    },
    {
        id: 2,
        task: 'Hacer la comida',
        description: 'A las 13:00 realizar la comida'
    }
]

/* (El name y initialState seria como usar el const [name, setName] =useState(initialstate)) */
export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const {task, description} = action.payload;
            return [...state, {task: task, description: description}]
        }
    }
})

/* Exportamos las funciones que podemos utilizar */
export const { addTask} = taskSlice.actions

/* Aqui exportamos la propiedad reducer que utilizamos en el store(contexto) */
export default taskSlice.reducer