/* El store es como el contexto en react */
import { configureStore } from '@reduxjs/toolkit'
/* importo del taskSlice el reducer que exporto al final del fichero cambiandole el nombre */
import taskReducer from '../features/task/taskSlice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
}) 
