import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from '../features/task/taskSlice'

export const Task = () => {
  /* De todos los estados, es decir de los que esten dentro de la carpeta store coge el tasks que seria el initialState*/
  const taskState = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Tareas {taskState.length}</h2>
      <Link to={'/tarea'} >Crear Tarea</Link>
      {taskState.map(task => {
        return (
          <div key={task.id}>
            <h3>{task.task}</h3>
            <p>Descripción: {task.description}</p>
            <Link to={`/tarea/${task.id}`} >Editar Tarea</Link>
            <button type='button' onClick={() => {dispatch(deleteTask(task.id))}}>Eliminar</button>
          </div>
        )
      })}

    </div>
  )
}
