import React, {Component} from 'react';


class CargaCriptomonedas extends Component{
    
    state = { criptomoneda: {}}


     componentDidMount() {
    
        fetch('https://min-api.cryptocompare.com/data/all/coinlist?api_key=587f2786d4ab857fe00b1cf2b25cfdf6b43ba5220849cc2658892344dd30085a')
        .then(datos => datos.json())
        .then(dato => {
        //    console.log(datos)
            const criptomonedas = dato 
            this.setState({criptomoneda: criptomonedas})
        }) 
             

    }
    
    cargaCriptomonedas(){ 
        console.log(this.state.criptomoneda.Data) 
        if (this.state.criptomoneda.Data === undefined){
            console.log('nok')
        }else{
            let criptomoneda = this.state.criptomoneda

             
                
            //for (var [key, value] of Object.entries(criptomoneda.Data)) {
           return Object.entries(criptomoneda.Data).map(([key, value]) =>{  
               // console.log(key + ' ' + value.CoinName)
                
                return(
                    <option value={key} > {value.CoinName}</option> 
                )

            
                })
                 
        }
    }

    render(){
        
      return(
      <select>
          
          {this.cargaCriptomonedas()}
        
      </select>
      )
    }
}

export default CargaCriptomonedas;