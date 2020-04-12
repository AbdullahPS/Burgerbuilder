import React,{Component} from 'react';
import Layout from './components/Layout/Layout'
import Burgerbuilder from './containers/Burgerbuilder/Burgerbuilder'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import {Route,Switch } from 'react-router-dom'

class  App extends Component {
  render(){
  return (
        
        <Layout classname >
          <Switch>
              <Route path ="/checkout" component ={Checkout}/>
              <Route path ="/orders"  component ={Orders}/>
              <Route path ="/" exact component ={Burgerbuilder}/>


          </Switch>
              </Layout>
    
    
    

  );
  }
}

export default App;
