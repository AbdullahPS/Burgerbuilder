import React, { Component } from 'react'
import Aux from '../../../../hoc/Aux'
import Button from '../../../UI/Button/Button'
class Ordersummary extends Component{          
    componentDidUpdate(){
        //console.log('[OrderSummary did update]')
    }
    //salad:0
    //beer:1
    
    render(){
            const listelements = Object.keys(this.props.ings).map(el=>
            <li key={el}>
            <span style={{textTransform: 'capitalize'}}>{el}</span> {this.props.ings[el]}
             </li>)

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {listelements}
            </ul>
            <p><strong>Total Price : {this.props.price}</strong></p>
            <p>Continue to checkout ?</p> 
           <Button btnType='Danger' clicked={this.props.purchCancelled}>CANCEL</Button>
           <Button btnType='Success' clicked ={this.props.purchContinued}>CONTINUE</Button>

        </Aux>
    
    );}



}
export default Ordersummary;