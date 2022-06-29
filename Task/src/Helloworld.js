
import React from 'react';
import './App.css';

/*
Función que recoge parámetros recordamos que los recibe en forma de objeto
 function Helloworld(props) {
  return (
    <div className='hello'>
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
} */

function App() {
  return (
    <div>
      <p>Esto son mis componentes:</p>
      <Helloworld mytext='hello world' subtitle='Primer Componente' />
      <div><Helloworld mytext='hello pepe' /></div>
    </div>
  );
}



class Helloworld extends React.Component {
  state = {
    show: true,
  }
  visible = ()=> this.setState({show: !this.state.show});

  render() {
    if (this.state.show) {
      return <div className='hello'>
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <button onClick={this.visible}>Ocultar</button>
      </div>
    }else {
      return <div>
        <h2>Muestra div anterior:</h2>
        <button onClick={this.visible}>Mostrar</button>
      </div> 
    }  
  };
}

/* export default App; */
