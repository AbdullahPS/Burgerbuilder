import React from 'react'
import menuItem from '../../../../assets/images/menuIcon.png'
import classes  from './NavItemMenu.module.css'
const naviItemMenu =(props)=>{

    return(
    <div onClick ={props.clicked} className={classes.NavItemMenu} >
        <img  src = {menuItem} alt ='burgermenu'/>
    </div>);
}
export default naviItemMenu