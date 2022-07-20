import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from '../features/task/taskSlice'

export const Task = () => {
  /* De todos los estados, es decir de los que esten dentro de la carpeta store coge el tasks que seria el initialState*/
  const taskState = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  return (
    <div className='bg-indigo-700 min-h-screen'>
      <div className='flex p-4'>
        <h2 className='w-4/5 text-center'>Tareas {taskState.length}</h2>
        <Link className=' ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border no-underline cursor-pointer border-green-500 rounded' to={'/tarea'} >Crear Tarea</Link>
      </div>
      <div className='grid grid-cols-3 gap-3 p-2'>
        {taskState.map(task => {
          return (
            <div key={task.id} className='bg-indigo-800 rounded-md p-2 flex'>
              <div>
                <h3>Tarea {taskState.indexOf(task) + 1}</h3>
                <h4>{task.task}</h4>
                <p>Descripción: {task.description}</p>
              </div>
              <div className='flex justify-center gap-2 items-center ml-4 flex-wrap'>
                <Link className='bg-blue-500 px-2 py-1 cursor-pointer rounded border-none text-white hover:bg-blue-400' to={`/tarea/${task.id}`} >Editar</Link>
                <button className='bg-red-500 px-2 py-1 cursor-pointer rounded border-none text-white hover:bg-red-400' type='button' onClick={() => { dispatch(deleteTask(task.id)) }}>Eliminar</button>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}
