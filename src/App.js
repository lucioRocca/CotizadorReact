import React, {Component} from 'react';
import './App.css';
import ImportApi from './js/Api.js';
import CargaCriptomonedas from './js/Api.js';


function App() {
  return (
  <div>
      <h1>Convertidor de criptomonedas</h1>
      <CargaCriptomonedas/>  
  </div>
  

  );
}

export default App;
