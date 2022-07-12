import React, { useContext } from 'react'
import { useEffect } from 'react'
import { endpoint,fetchGet } from '../services/peticiones'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { contextResponseGet } from '../globalContext/ContextForm'
import ClassNames from 'classnames'
import './form.css'

export const Crud = () => {
    
    /* Datos contexto */
    const {valueGet, valueModal} = useContext(contextResponseGet);
    const [responseGet, setResponseGet] = valueGet;
    const [visibilitiModal, setVisibilitiModal] = valueModal;
    
    /* const [responseGet, setResponseGet] = useState([]); */
    
    /* const fetchGet = async () => {
        const { data } = await axios.get(endpoint + 'productos')
        setResponseGet(data);
    } */
    const showProducts = () => {fetchGet().then(data => setResponseGet(data))};

    const fetchDelete = async (id) => {
        await axios.delete(endpoint + 'productos/' + id);
        showProducts();
    }
 
    useEffect(() => {
        showProducts(); 
    }, [])

    return (
        <>
      <div className={ClassNames(visibilitiModal ? 'modal-open' : 'modal-close', "bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded relative")} role="alert">
        <span className="block sm:inline">Producto editado correctamente </span>
       
          
        <button type='button' 
            className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer border-none bg-green-100 border "
            onClick={() => {setVisibilitiModal(false)}} >
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
        </button>  
        
      </div>
        <div>
            <Link className=' bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border no-underline cursor-pointer border-green-500 rounded' to={'/create'}>Crear</Link>
            <table className='min-w-full mt-5 block sm:table'>
                <thead className='block sm:table-header-group'>
                    <tr className='border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative '>
                        <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                            <div>Nombre</div>
                        </th>

                        <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                            <div>Descripción</div>
                        </th>

                        <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                            <div>Precio</div>
                        </th>
                        <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                            <div>
                                Acción
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className='block sm:table-row-group'>
                    {responseGet.map(producto => {
                       return <tr className='bg-gray-300 border border-grey-500 md:border-none block md:table-row' key={producto.id}>
                            <td className='p-2 md:border md:border-grey-500 text-left block md:table-cell'>{producto.nombre}</td>
                            <td className='p-2 md:border md:border-grey-500 text-left block md:table-cell'>{producto.descripcion}</td>
                            <td className='p-2 md:border md:border-grey-500 text-left block md:table-cell'>{producto.precio}</td>
                            <td>
                                {/* Va al formulario de editar */}
                                <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded no-underline' to={'/edit/' + producto.id}>Editar</Link>
                                {/* peticion al backend delete */}
                                <button className='bg-red-500 hover:bg-red-700 text-white font-bold ml-3 py-1 px-2 border-none  rounded cursor-pointer' onClick={() => { fetchDelete(producto.id)}}>Eliminar</button>
                            </td>
                        </tr>

                    })}
                </tbody>

            </table>
        </div>
        </>
    )
}
