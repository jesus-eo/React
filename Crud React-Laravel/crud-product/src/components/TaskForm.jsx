import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, editTask } from '../features/task/taskSlice'
import {v4 as uuid} from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'
import { showModal } from '../features/task/modalSlice'


export const TaskForm = () => {
    const taskState = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    const params = useParams();
    const [task, setTask] = useState({
        task: '',
        description: ''
    })
    const navigate = useNavigate();
    const newTask = (e) => {
        setTask({...task, [e.target.name]: e.target.value })
    } 
    const createEditTask = (e) => { 
        e.preventDefault(); 
        if (params.tareaId) {
            dispatch(editTask(task))
            dispatch(showModal({texto: ' editada '}))
        } else {
            dispatch(addTask({...task, id: uuid()})); 
            dispatch(showModal({texto:' creada '}));
        }
        navigate(-1);
    }

    useEffect(() => {
        if (params.tareaId) {   
            setTask(taskState.find( task => task.id  == params.tareaId))           
        }
    }, [])

    

  return (
    <div className='container-taskform bg-indigo-700 min-h-screen flex items-center justify-center'>
        <form className='taskform bg-indigo-800 rounded-md p-2 ' onSubmit={(e) => (createEditTask(e))}>
            <h3 className='text-center'>{params.tareaId ? 'Editar Tarea' : 'Crear tarea'}</h3>
            <div className='flex p-4'>
                <label className='mr-4' htmlFor="tarea">Tarea:</label>
                <input 
                    onChange={(e) => {newTask(e)}}
                    type="text" 
                    name="task" 
                    id="tarea" 
                    placeholder='Nombre de la tarea' 
                    title='Introduce el nombre de la tarea a realizar' 
                    value={task.task}
                    required/>
            </div>
            <div className='flex p-4'>
                <label className='mr-4' htmlFor="description">Descripción:</label>
                <textarea 
                    onChange={(e) => {newTask(e)}}
                    name="description" 
                    id="description" 
                    cols="30" rows="10" 
                    placeholder='Descripción de la tarea' 
                    required 
                    value={task.description}
                    title='Introduce la descripción de la tarea a realizar'></textarea>
            </div>
            <div className='flex w-full justify-center items-center gap-2'>
            <button className='bg-blue-500 px-4 py-1 cursor-pointer rounded-md border-none text-white hover:bg-blue-400 ' type="submit">Save</button>
            <button className='bg-green-500 px-4 py-1 cursor-pointer rounded-md border-none text-white hover:bg-green-400 ' type="button"
            onClick={() => {navigate(-1)}}>Volver</button>
            </div>
        </form>
    </div>
  )
}
