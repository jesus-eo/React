import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../features/task/taskSlice'


export const Task = () => {
  /* De todos los estados, es decir de los que esten dentro de la carpeta store coge el tasks que seria el initialState*/
  const taskState = useSelector(state => state.tasks)
  console.log(taskState);
  return (
    <div>
      <h1>Tareas {taskState.length}</h1>

      {taskState.map(task => {
        return (
          <div>
            <h3>{task.task}</h3>
            <p>Descripción: {task.description}</p>
          </div>
        )
      })}

    </div>
  )
}
