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
            console.log(action);
            const {id, task, description} = action.payload;
            return [...state, {id: id, task: task, description: description}]
        },
        deleteTask: (state, action) => {
           return state = state.filter( task => task.id !== action.payload)
        }
    }
})

/* Exportamos las funciones que podemos utilizar */
export const { addTask, deleteTask} = taskSlice.actions

/* Aqui exportamos la propiedad reducer que utilizamos en el store(contexto) */
export default taskSlice.reducer