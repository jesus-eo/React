
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import { Crud } from './components/Crud';
import { Form } from './components/Form';
import { ContextForm } from './globalContext/ContextForm';
/*import de  Crud redux-toolkit */
import { store } from './app/store';
import { Provider } from 'react-redux';
import { Task } from './components/Task';
import { TaskForm } from './components/TaskForm';

function App() {
  return (
    <>
      <div className='flex w-full justify-center items-center bg-amber-400 h-14 '>
        <div className='flex w-4/6 justify-between items-center text-blue-600'>
          <NavLink
            className={({ isActive }) => !isActive ? 'no-underline text-blue-600 hover:text-blue-800' : 'text-green-600'}
            to={'productos'}>Crud productos Laravel</NavLink>
          <NavLink
            className={({ isActive }) => !isActive ? 'no-underline text-blue-600 hover:text-blue-800' : 'text-green-600'}
            to={'tareas'}>Crud Tareas Usando Redux-toolkip
          </NavLink>
        </div>
      </div>
      {/* Rutas para Crud productos con laravel */}
      <ContextForm>
        <Routes>
          <Route exac path='/create' element={<Form />}></Route>
          <Route exac path='/edit/:productoId' element={<Form />}></Route>
          <Route exac path='/productos' element={<Crud />}></Route>
        </Routes>
      </ContextForm>

      {/*  Rutas para crud tareas con redux-toolkit, importamos las tareas de la carpeta store para poder acceder a ellas desde las rutas hijas*/}
      <Provider store={store}>
        <Routes>
          <Route exac path='/tareas' element={<Task />}></Route>
          <Route exac path='/tarea' element={<TaskForm />}></Route>
          <Route exac path='/tarea/:tareaId' element={<TaskForm />}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
