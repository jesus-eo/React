import React, { Component } from 'react';
import './Task.css';
/* Biblioteca para corregir tipo de datos pasados sean los correctos */
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';



class Task extends Component {

    deleteTask = (e) => {
        this.props.deleteTask(e.target.value);
    }
    checkDone = (e) => {
        this.props.checkDone(e.target.value);
    }
   
    CambiaColor(){
        return {         
            color: this.props.e.done ? 'black' : 'green' 
        }
    };
    render() {
        return <div>
        <h3 className='red'>ID: {this.props.e.id}</h3> 
        <ul style={this.CambiaColor()}>
          <li >Título: {this.props.e.title}</li>
          <li>Descripción: {this.props.e.description}</li>
          <li>Done: {this.props.e.done}</li>              
        </ul> 
        <input type='checkbox' value={this.props.e.id} onClick={this.checkDone}></input>
        <button style={btnDelete} onClick={this.deleteTask} value={this.props.e.id} >X</button>  
        <Outlet />         
      </div>
    };  
    
 
};


/* Creando estilos en linea para botones */
const btnDelete = {
    backgroundColor: "green",
    cursor: "pointer",
};

Task.propTypes = {
    e: PropTypes.object.isRequired
}
export default Task;