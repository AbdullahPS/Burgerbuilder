import React, { Component } from 'react'
import Aux from '../../hoc/Auxi'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from '../Layout/Layout.module.css'
import Sidedrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component {
    state ={
        showSideDawer:false
    }
    sideDrawerClosedHandler =()=>{
        this.setState({showSideDawer:false})
    }
sideDrawerToggler =()=>{
    const actualState=this.state.showSideDawer;
    this.setState({showSideDawer:!actualState})
    }

    render(){
        return(
    <Aux>
         <Toolbar clicked ={this.sideDrawerToggler}/>
         <Sidedrawer  open ={ this.state.showSideDawer}closed ={this.sideDrawerClosedHandler}/>
        <main className={classes.Layout}>{this.props.children}</main>
    </Aux>
        )}
}
export default Layout