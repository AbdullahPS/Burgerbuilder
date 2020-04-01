import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../../components/UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxi'
const sideDrawer =(props) => {
//... attach differemct css classes for animation for slice in andd out
let attachedClasses=[classes.SideDrawer,classes.Close];
if(props.open){
    attachedClasses[1] = classes.Open
} 

return (
    <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className ={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav >
        <NavigationItems/>
        </nav>

</div>
    </Aux>

)
}
export default sideDrawer