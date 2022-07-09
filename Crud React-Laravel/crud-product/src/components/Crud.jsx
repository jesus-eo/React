import React from 'react'
import { useEffect } from 'react'
import { endpoint } from '../services/peticiones'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Crud = () => {

    const [responseGet, setResponseGet] = useState([]);

    const fetchGet = async () => {
        const { data } = await axios.get(endpoint + 'productos')
        setResponseGet(data);
    }
    const fetchDelete = async (id) => {
        await axios.delete(endpoint + 'productos/' + id);
        fetchGet();
    }
    useEffect(() => {
        fetchGet();
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <div>Nombre</div>
                        </th>

                        <th>
                            <div>Descripción</div>
                        </th>

                        <th>
                            <div>Precio</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {responseGet.map(producto => {
                       return <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.precio}</td>
                            <td>
                                {/* Va al formulario de editar */}
                                <Link to={'/edit'}>Editar</Link>
                                {/* peticion al backend delete */}
                                <button onClick={() => { fetchDelete(producto.id)}}>Eliminar</button>
                            </td>
                        </tr>

                    })}
                </tbody>

            </table>
        </div>
    )
}
