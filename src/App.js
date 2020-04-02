import React, {Component} from 'react';
import './App.css';
import CargaCriptomonedas from './js/Api.js';


function App() {
  return (
  <div class= "principal">
      
      
    <div class ="conteiner">
      <h1>Convertidor de criptomonedas</h1>
      <CargaCriptomonedas/>  
    </div>
  
        
  </div>
  

  );
}

export default App;
