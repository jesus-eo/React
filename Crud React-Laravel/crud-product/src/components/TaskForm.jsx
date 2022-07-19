import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../features/task/taskSlice'
import {v4 as uuid} from 'uuid'


export const TaskForm = () => {

    const dispatch = useDispatch()
    const [task, setTask] = useState({
        id:'',
        task: '',
        description: ''
    })
    const newTask = (e) => {
        setTask({...task, [e.target.name]: e.target.value })
    } 
    const createTask = (e) => { 
        e.preventDefault(); 
        dispatch(addTask({...task, id: uuid()}))
    }

  return (
    <div className='container-taskform'>
        <form className='taskform' onSubmit={(e) => (createTask(e))}>
            <div>
                <label htmlFor="tarea">Tarea</label>
                <input 
                    onChange={(e) => {newTask(e)}}
                    type="text" 
                    name="task" 
                    id="tarea" 
                    placeholder='Nombre de la tarea' 
                    title='Introduce el nombre de la tarea a realizar' 
                    required/>
            </div>
            <div>
                <label htmlFor="description">Descripción:</label>
                <textarea 
                    onChange={(e) => {newTask(e)}}
                    name="description" 
                    id="description" 
                    cols="30" rows="10" 
                    placeholder='Descripción de la tarea' 
                    required 
                    title='Introduce la descripción de la tarea a realizar'></textarea>
            </div>
            <button type="submit">Nueva tarea</button>
        </form>
    </div>
  )
}
