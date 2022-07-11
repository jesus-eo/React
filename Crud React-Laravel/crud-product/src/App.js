
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Crud} from './components/Crud';
import { Form } from './components/Form';

function App() {
  return (
    <>
    <Routes>
      <Route exac path='/create' element={<Form/>}></Route>
      <Route exac path='/edit/:productoId' element={<Form/>}></Route>
      <Route exac path='/' element={<Crud/>}></Route>
    </Routes>
    </> 
  );
}

export default App;
