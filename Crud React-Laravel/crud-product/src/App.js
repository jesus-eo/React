
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Crud } from './components/Crud';
import { Form } from './components/Form';
import { ContextForm } from './globalContext/ContextForm';
/*import de  Crud redux-toolkit */
import { store } from './app/store';
import { Provider } from 'react-redux';
import { Task } from './components/Task';

function App() {
  return (
    <>
      <div className='flex w-full justify-center items-center'>
        <div className='flex w-4/6 justify-between items-center'>
          <Link to={'productos'}>Crud productos Laravel</Link>
          <Link to={'tareas'}>Crud Tareas Usando Redux-toolkip</Link>
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
          <Route exac path='/tareas' element={<Task/>}></Route>
          <Route exac path='/tarea'></Route>
          <Route exac path='/tarea/:tareaID'></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
