import React, {Component} from 'react';
import './App.css';
import CargaCriptomonedas from './js/CargaCriptomonedas.js';

import Convert from './js/Convertir.js';

class App extends Component {

  state = {
    criptomonedaSeleccionada: undefined,
    monedaSeleccionada: undefined,
  }


  handleChangeCripto= (e)=>{
    this.setState({criptomonedaSeleccionada: e.target.value})
  }


  render(){ 

    return (
    <div className= "principal">
        
        
      <div className ="conteiner">
        <h1>Convertidor de criptomonedas</h1>
        
        <div className='all-monedas'>
          <div className='monedas' onChange={this.handleChangeCripto}>
            <CargaCriptomonedas />  
          </div>
        </div>
      
        <Convert segundoSimbolo = {this.state.criptomonedaSeleccionada}/>
      </div>
    </div>
    );
  }
}

export default App;
