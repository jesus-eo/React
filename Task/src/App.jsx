
import React, { Component} from 'react';
import './App.css';
import tasks from './examples/task.json'
import Tasks from './components/Tasks'
import Taskform from './components/Taskform';
import Post from './components/Post';
import Wishlist from './components/Wishlist';

import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'

/*En state guardo el json importado*/


class App extends Component {
  state = {
    tasks: tasks,
  }
  /**
   * Añade nueva tarea al state tasks 
   * */
  anyadeTarea = (titulo, descripcion) => {
    const task = { id: this.state.tasks.length, title: titulo, description: descripcion };
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  /**Elimino una tarea alterando el state 
   * @param id  id del elemento pulsado
  */
  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== parseInt(id));
    this.setState({ tasks: tasks });
  }

  checkDone = (id) => {
    const check = this.state.tasks.map((task) => {
      if (task.id === parseInt(id)) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: check })
  }

  render() {
    return (<div>

      {/* El to es como el href */}
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <Link to="/posts">Posts</Link>
        <br />
        <Link to="/wishlist">wishlist</Link>
        <Routes>
          <Route exact path="/" element={
            <div>

              <Taskform anyadeTarea={this.anyadeTarea} />
              <Tasks checkDone={this.checkDone} deleteTask={this.deleteTask} tasks={this.state.tasks} />
            </div>}
          />
        </Routes>

        <Routes>
          <Route exact path="/posts" element={<Post />} />
        </Routes>
        {/* Parte Wish utilizando funciones */}
        <Routes>
          <Route exact path="/wishlist" 
            element={
              <Wishlist />          
            } />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
    )
  };
}

export default App;
