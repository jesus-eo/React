
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Crud} from './components/Crud';
import { Form } from './components/Form';

function App() {
  return (
    <>
    <Routes>
      <Route path='/edit' element={<Form/>}></Route>
      <Route path='/' element={<Crud/>}></Route>
    </Routes>
    </> 
  );
}

export default App;
