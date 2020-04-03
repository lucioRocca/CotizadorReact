import React, {Component} from 'react';
import './App.css';
import CargaCriptomonedas from './js/CargaCriptomonedas.js';
import CargaMonedas from './js/CargaMonedas.js';


class App extends Component {

  state = {
    criptomonedaSeleccionada: undefined,
    monedaSeleccionada: undefined,
  }


  handleChangeCripto= (e)=>{
    console.log(e.target.value)
    this.setState({criptomonedaSeleccionada: e.target.value})
  }

  handleChangeMoneda= (e)=>{
    console.log(e.target.value)
    this.setState({monedaSeleccionada: e.target.value})
  }

  render(){ 

    return (
    <div className= "principal">
        
        
      <div className ="conteiner">
        <h1>Convertidor de criptomonedas</h1>
        
        <div className='all-monedas'>
          <div className='monedas' onChange={this.handleChangeMoneda}>
          <label>moneda</label>
            <CargaMonedas />
            <p>{this.state.monedaSeleccionada}</p>
          </div>

          <div className='monedas' onChange={this.handleChangeCripto}>
            <label>criptomoneda</label>
            <CargaCriptomonedas />  
            <p>{this.state.criptomonedaSeleccionada}</p>
          </div>

        </div>

      </div>
    
    </div>
    );
  }
}

export default App;
