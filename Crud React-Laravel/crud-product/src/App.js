
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Crud } from './components/Crud';
import { Form } from './components/Form';
import { ContextForm } from './globalContext/ContextForm';

function App() {
  return (
    <>
      <ContextForm>
        <Routes>
          <Route exac path='/create' element={<Form />}></Route>
          <Route exac path='/edit/:productoId' element={<Form />}></Route>
          <Route exac path='/' element={<Crud />}></Route>
        </Routes>
      </ContextForm>
    </>
  );
}

export default App;
