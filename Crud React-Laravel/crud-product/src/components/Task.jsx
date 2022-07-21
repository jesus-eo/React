import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from '../features/task/taskSlice'
import ClassNames from 'classnames'
import { showModal } from '../features/task/modalSlice'

export const Task = () => {
  /* De todos los estados, es decir de los que esten dentro de la carpeta store coge el tasks que seria el initialState*/
  const taskState = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const modalState = useSelector(state => state.modalTask)

  
  return (
    <div className='bg-indigo-700 min-h-screen'>
      {/*  Modal */}
      {modalState.visibility && 
        <div className={ClassNames(
         modalState.accion == 'delete' ? "bg-red-100 border-red-400 text-red-700" : "bg-green-100 border-green-400 text-green-700", " border  px-4 py-3 mb-4 rounded relative")} role="alert">
          <span className="block sm:inline">Tarea
            {modalState.texto }
            correctamente </span>
    
          <button type='button'
            className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer border-none bg-green-100 border "
            onClick={() => { dispatch(showModal({accion: 'close', texto: ''})) }} >
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
          </button>
        </div>
      }


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
                <button className='bg-red-500 px-2 py-1 cursor-pointer rounded border-none text-white hover:bg-red-400' type='button' onClick={() => { dispatch(deleteTask(task.id)); dispatch(showModal({accion: 'delete', texto: ' eliminada '})) }}>Eliminar</button>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}
