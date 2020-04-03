import React, {Component} from 'react';
import './App.css';
import CargaCriptomonedas from './js/CargaCriptomonedas.js';
import CargaMonedas from './js/CargaMonedas.js';


function App() {
  return (
  <div className= "principal">
      
      
    <div className ="conteiner">
      <h1>Convertidor de criptomonedas</h1>
      
      <div className='all-monedas'>
        <CargaMonedas />
        <CargaCriptomonedas />  
      </div>

    </div>
  
  </div>
  

  );
}

export default App;
