import React, {Component} from 'react';
//https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,ARS

class Convert extends Component {
    constructor (props){
        super(props)
        this.state = { 
            segundoSimbolo: this.props.segundoSimbolo,
            valorConversion: undefined
        }
    }
    
    
    componentWillReceiveProps(props){ 
        this.convertir(props.segundoSimbolo)
       
    }

    convertir(segundoSimbolo){

        if(segundoSimbolo !== undefined){
            const key = '587f2786d4ab857fe00b1cf2b25cfdf6b43ba5220849cc2658892344dd30085a'
                fetch(`https://min-api.cryptocompare.com/data/price?fsym=${segundoSimbolo}&tsyms=USD,ARS,EUR&apiKey=${key}`)
                .then(res => res.json())
                .then((valor) =>{ 
                    console.log(valor.valueOf())
                    this.setState({valorConversion: valor})    
                })
    
            }
    }
    /*shouldComponentUpdate(props){
        //console.log(props);
        console.log(this.state);
        return this.props.primerSimbolo !== props.primerSimbolo || this.props.segundoSimbolo !== props.segundoSimbolo
    }*/

   /* condicionRender(){
        if(this.state.valorConversion === undefined){
           'ingrese un valor' 
        }elseif(this.state.valorConversion !== ){
            
        }
    }*/
    condicionalRender = ()=>{ 
       if( this.state.valorConversion === undefined){
        return (<p>ingrese una criptomoneda</p>)
       }else{
        return (
        <div>
            <p>USD:${this.state.valorConversion.USD}</p>
            <p>EUR:${this.state.valorConversion.EUR}</p>
            <p>ARS:${this.state.valorConversion.ARS}</p>
        </div>
        ) 
       }
    }

    render(){
        console.log(this.state.valorConversion)


        return(
            <div>
               {this.condicionalRender()}
            </div>

        )
    }

    }   

export default Convert;