import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { endpoint } from '../services/peticiones'

export const Form = () => {

  const navigate = useNavigate();
  const {productoId} = useParams();
  const [exitId, setExitId] = useState(false); 
  const [valueName, setValueName] = useState('');
  const [valueDescripcion, setValueDescripcion] = useState('');
  const [valuePrecio, setValuePrecio] = useState('');
  useEffect(() => {
    if(productoId){
      setExitId(true)
    }
  }, [productoId])
  
 
  const fetchUpdate = async (e) => {
    const producto = {
      'id': productoId,
      'nombre': valueName,
      'descripcion': valueDescripcion,
      'precio': valuePrecio
    }
    e.preventDefault();
    const {data} = await axios.put('http://localhost:8000/api/productos/'+productoId, producto);
    alert('Datos actualizado con exito');
  } 

  const fetchCreate = async (e) => {
    const producto = {
      'nombre': valueName,
      'descripcion': valueDescripcion,
      'precio': valuePrecio
    }
    e.preventDefault();
    const {data} = await axios.post('http://localhost:8000/api/productos/', producto);
    alert('Datos creado con exito');
  } 

  return (
    <div className='flex justify-center min-h-screen items-center flex-col '>
      <h1>Formulario para {exitId ? 'editar' : 'crear'}</h1>
      <form action='post' className='flex justify-center items-center flex-col bg-slate-600 rounded h-60 p-4' onSubmit={(e) => {exitId ? fetchUpdate(e): fetchCreate(e)}}>
      <div className='p-2'>
        <label className='px-2' htmlFor="nombre">Nombre:</label>
        <input type="text" name="nombre" id="" value={valueName} onChange={(e) => {setValueName(e.target.value)}} />
      </div>
      <div className='p-2'>
        <label className='px-2' htmlFor="descripcion">Descripción:</label>
        <input type="text" name="descripcion" id="" value={valueDescripcion} onChange={(e) => {setValueDescripcion(e.target.value)}} />
      </div>
      <div className='p-2'>
        <label className='px-2' htmlFor="precio">Precio:</label>
        <input type="text" name="precio" id="" value={valuePrecio} onChange={(e) => {setValuePrecio(e.target.value)}} />
      </div>
      <div className='flex'>
      <button className='bg-green-500 hover:bg-green-600 cursor-pointer' type="submit">{exitId ? 'Editar' : 'Crear' }</button>
      <button onClick={() => {navigate('/')}}>Volver</button>
      </div>
     
      </form>
    </div>
  )
}
