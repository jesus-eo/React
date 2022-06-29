import React, { Component } from 'react';
import Task from './Task'
import PropTypes from 'prop-types';
/* Le paso la propiedad Tasks donde esta el json con las tareas */
class Tasks extends Component {
    render(){
        return this.props.tasks.map((e) => 
        <Task 
            deleteTask = {this.props.deleteTask}  
            e={e} 
            key={e.id}
            checkDone = {this.props.checkDone} />
        )
    };
}
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}
export default Tasks;