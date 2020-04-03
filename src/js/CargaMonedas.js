import React, {Component} from 'react';


class CargaMonedas extends Component{
    
    state = { 
        moneda: {}
        
    }

    keyApi= () => `67faf98bd47795dfa180`
    url= () =>`https://free.currconv.com/api/v7/currencies?apiKey=${this.keyApi()}`

    componentDidMount(){
        fetch(this.url())
        .then(res =>res.json())
        .then(res => {
            this.setState({moneda: res})
        })

        
    }

    cargarMonedas(){
        if (this.state.moneda.results !== undefined){
            const monedas = this.state.moneda
            //console.log(monedas.results)
            return  Object.entries(monedas.results).map(([key, value]) =>{
                    return (
                    <option key={key} value={key}>{value.currencyName}</option>
                    )
                })
        }
    }

    render(){
        
        return(
            <div className='monedas'>
      
            <select>
                <option value= 'moneda' key="moneda">Seleccione Su Moneda</option>
                {this.cargarMonedas()}
            </select>
            
            </div>
        )
    }
}

export default CargaMonedas;