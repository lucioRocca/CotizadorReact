import React, {Component} from 'react';


class CargaCriptomonedas extends Component{

    state = { 
        criptomoneda: {},
        keyApi: '587f2786d4ab857fe00b1cf2b25cfdf6b43ba5220849cc2658892344dd30085a',
    }
         

     componentDidMount() {
        
        fetch(`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.state.keyApi}`)
        .then(datos => datos.json())
        .then(dato => {
        //    console.log(datos)
            const criptomonedas = dato 
            this.setState({criptomoneda: criptomonedas})
        }) 
             

    }
    
    

    cargaCriptomonedas(){ 
        //console.log(this.state.criptomoneda.Data) 
        if (this.state.criptomoneda.Data !== undefined){
            let criptomoneda = this.state.criptomoneda
            //for (var [key, value] of Object.entries(criptomoneda.Data)) {
            console.log(criptomoneda.Data)
            return Object.values(criptomoneda.Data).map((value) =>{  
               //console.log(value)
                
                return(
                   <option key={value.Symbol} value={value.Symbol}>{value.CoinName}</option> 
                )

            
                })
                 
        }
    }

    render(){
      return(

        <select  >
            <option key="criptomoneda" value="criptomoneda">Seleccione Su Criptomoneda</option>
            {this.cargaCriptomonedas()}

        </select>

        )
    }
}

export default CargaCriptomonedas;