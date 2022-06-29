import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';


export default class Taskform extends Component {

    state = {
        title:'',
        description: ''
    }

   /*  Llamada a la función anyadeTarea de App.js pasada como propiedad */
   agregandoTarea = (e) => {
    e.preventDefault();
    this.props.anyadeTarea(this.state.title,this.state.description);
    
    };

   /*  Actualizo datos del state */
    valueInput = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    render() {
        return (
            <form onSubmit={this.agregandoTarea}>
                <input 
                    name='title'
                    type='text'  
                    placeholder ='Escribe una tarea'
                    onChange={this.valueInput} value={this.state.title}/>
                <br/>
                <br/>
                <textarea
                    name='description'
                    placeholder='Escribe la descripción'
                    onChange={this.valueInput} value={this.state.description}>
                </textarea>
                <button type='submit'>Agregar tarea</button>
                <Outlet />
            </form>
        )
    }
}