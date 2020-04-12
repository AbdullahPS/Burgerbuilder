import React,{Component} from 'react';
import axios from '../../axiosOrders'

import Burger from '../../components/Layout/Burger/Burger'
import Aux from '../../hoc/Auxi'
import BuilControls from '../../components/Layout/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Layout/Burger/OrderSummary/Ordersummar'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const ING_PRICES ={
    salad:0.4,
    meat:1.2,
    bacon:0.99,
    cheese:0.7
}
class Burgerbuilder extends Component {


    state={
        ingredients:null,
        price:4,  //initally price of the burger is 4 shekel;
        purchasable:false, //order state by button 
        purchasing:false, //when the order button was clicked this should be false 
        loading:false,
        error:null
    }   

    componentDidMount(){
        axios.get('https://react-my-burger-9bc55.firebaseio.com/ingredients.json')
        .then(response=>{
        this.setState({ingredients:response.data});
        console.log(this.props)
    })
    .catch(error=>{this.setState({error:true})})
        
}
   
    addIngredientsHandler=(type)=>{
        //console.log(`added ${type}`);
          //add ingredient to state 
        //make a copy of the state and update the type 
        const updatetIngs ={...this.state.ingredients};
         updatetIngs[type]++
        //update the price 
        const newPrice=this.state.price +ING_PRICES[type];

        this.setState({
            price:newPrice,
            ingredients:updatetIngs
        }
        );
        this.updatePurchaseState(updatetIngs)
        //update the state 

    };
    removeIngredientsHandler=(type)=>{
      // console.log(`removed ${type}`);
        //add ingredient to state 
        //make a copy of the state and update the type 
        const updatetIngs ={...this.state.ingredients};
        if (updatetIngs[type]<=0) {
            //here we need to disable the button

         }
         else{ //here we can safely remove the ingredient 
            updatetIngs[type]--
            //update the price 
            const newPrice=this.state.price -ING_PRICES[type];
    
            this.setState({
                price:newPrice,
                ingredients:updatetIngs
            }
            );
         }

         this.updatePurchaseState(updatetIngs);

    };
    updatePurchaseState=(ings)=>{
        
       
        //1.turn object into an array
        const sum = Object.keys(ings) //array of strings[cheese,bacon,..]
        //2.map array into the array we need 
        .map(key=>{
            return ings[key];//here we get the count of the ing [0,1,0,1]
        })
        //3. reduce the array turns in inyo a singkle number
        .reduce((sum,el)=>{
            return sum +el;
        },0)
        
        this.setState({purchasable:sum>0})
       // console.log(this.state.purchasable)
    };
    purchaseHandler=()=>{
        this.setState({purchasing:true})

    }
    purchaseCancelHandler=()=>{
        this.setState({purchasing:false})
    }
    purchaseContinueHandler=()=>{
        const queryParams=[];
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+ '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price='+this.state.price.toFixed(2))
        const queryString=queryParams.join('&');
        console.log(queryString)
        this.props.history.push({
            pathname:'/checkout',
            search:'?'+queryString
        })
 
      
      }
render(){
    const disabledInfo={
        ...this.state.ingredients

    }
    for (let el in disabledInfo){
       disabledInfo[el]=disabledInfo[el]<=0;
    }
    let ordersummary=null;
   
    let burger =this.state.error?<p>Ingredients can't be loaded>  </p>:<Spinner/>
      if(this.state.ingredients)    {     
    burger = ( 
        <Aux>
        <Burger burgerings={this.state.ingredients}/>
        <BuilControls 
            addIng={this.addIngredientsHandler}
            removeIng={this.removeIngredientsHandler}
            disabled={disabledInfo}
            price={this.state.price.toFixed(2)}
            purchasable={this.state.purchasable}
            purchased={this.purchaseHandler}
        />
        </Aux>);
          ordersummary = (
            <OrderSummary   price={this.state.price.toFixed(2)}
            ings ={this.state.ingredients}
            purchCancelled={this.purchaseCancelHandler}
            purchContinued={this.purchaseContinueHandler}/>
                    );}
        if(this.state.loading)
            ordersummary=<Spinner/>
    return(
                           
            <Aux>     
                {burger}    
                <Modal show ={this.state.purchasing} 
                        modalClosed ={this.purchaseCancelHandler}>
                         {ordersummary}
                </Modal>
               
            </Aux>  


    );
}


}
export default withErrorHandler(Burgerbuilder,axios);