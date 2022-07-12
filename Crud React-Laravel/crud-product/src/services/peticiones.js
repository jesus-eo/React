import axios from 'axios'

export const endpoint = 'http://localhost:8000/api/'
export const fetchGet = async () => {
    const { data } = await axios.get(endpoint + 'productos');
    return data;
}
export const fetchDelete = async (id) => {
    await axios.delete(endpoint + 'productos/' + id);
}

export const fetchCreate = async ( producto) => {
    await axios.post(endpoint +'productos/', producto);
  } 

export const fetchUpdate = async (productoId, producto) => {
    await axios.put(endpoint + 'productos/' + productoId, producto);
  } 
