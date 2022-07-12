
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { contextResponseGet } from '../globalContext/ContextForm';
import { fetchCreate, fetchUpdate } from '../services/peticiones'

/**
 * Formulario para editar y crear productos
 * 
 */
export const Form = () => {

  const navigate = useNavigate();
  const { productoId } = useParams();
  /* Datos contexto */
  const {valueGet, valueModal} = useContext(contextResponseGet);
  const [responseGet] = valueGet;
  const [visibilitiModal, setVisibilitiModal] = valueModal;
  
  const [exitId, setExitId] = useState(false);
  const [valueName, setValueName] = useState('');
  const [valueDescripcion, setValueDescripcion] = useState('');
  const [valuePrecio, setValuePrecio] = useState('');
  

  useEffect(() => {
    if (productoId) {
      setExitId(true);
      const valueProduct = responseGet.filter(producto => producto.id === parseInt(productoId));
      setValueName(valueProduct[0].nombre);
      setValueDescripcion(valueProduct[0].descripcion);
      setValuePrecio(valueProduct[0].precio);
    }
  }, [productoId])

  const update = (e) => {
    const producto = {
      'id': productoId,
      'nombre': valueName,
      'descripcion': valueDescripcion,
      'precio': valuePrecio
    }
    e.preventDefault();
    fetchUpdate(productoId, producto);
    setVisibilitiModal(true)
    navigate('/');
  }


  const create = (e) => {
    const producto = {
      'nombre': valueName,
      'descripcion': valueDescripcion,
      'precio': valuePrecio
    }
    e.preventDefault();
    fetchCreate(producto);
    alert('Datos creado con exito');
  }

  /*   const fetchUpdate = async (e) => {
      const producto = {
        'id': productoId,
        'nombre': valueName,
        'descripcion': valueDescripcion,
        'precio': valuePrecio
      }
      e.preventDefault();
      const { data } = await axios.put('http://localhost:8000/api/productos/' + productoId, producto);
      alert('Datos actualizado con exito');
    } */
  /* const fetchCreate = async (e) => {
    const producto = {
      'nombre': valueName,
      'descripcion': valueDescripcion,
      'precio': valuePrecio
    }
    e.preventDefault();
    const {data} = await axios.post('http://localhost:8000/api/productos/', producto);
    
  }  */

  return (
    <>
      

      <div className='flex justify-center min-h-screen items-center flex-col '>
        <h1>Formulario para {exitId ? 'editar' : 'crear'}</h1>
        <form
          action='post'
          className='flex justify-center items-center flex-col bg-slate-400 rounded h-60 p-4'
          onSubmit={(e) => { exitId ? update(e) : create(e) }}
        >
          <div className='p-2'>
            <label className='px-2' htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              name="nombre"
              id=""
              value={valueName}
              onChange={(e) => { setValueName(e.target.value) }}
              required />
          </div>
          <div className='p-2'>
            <label className='px-2' htmlFor="descripcion">Descripción:</label>
            <input
              type="text"
              name="descripcion"
              id=""
              value={valueDescripcion}
              onChange={(e) => { setValueDescripcion(e.target.value) }}
              required />
          </div>
          <div className='p-2'>
            <label className='px-2' htmlFor="precio">Precio:</label>
            <input
              type="text"
              name="precio"
              id=""
              value={valuePrecio} onChange={(e) => { setValuePrecio(e.target.value) }}
              pattern='^[0-9]+([.][0-9]+)?$'
              title='Solo puedes introducir valores numerico ej:10.00'
              required />
          </div>
          <div className='flex'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded no-underline'
              type="submit">{exitId ? 'Editar' : 'Crear'}
            </button>
            <button
              className='bg-gray-500 hover:bg-gray-700 text-white font-bold ml-4 py-1 px-2 border border-gray-500 rounded no-underline'
              type='button'
              onClick={() => { navigate(-1) }}>Volver</button>
          </div>

        </form>
      </div>
    </>
  )
}
