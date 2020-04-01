import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import NaviItemMenu from '../SideDrawer/NavItemMenu/NavItemMenu'
const toolbar = (props) =>(
    <header className ={classes.Toolbar}>
          <NaviItemMenu clicked ={props.clicked}/>

          <Logo />
        <nav className={classes.DesktopOnly}>
           <NavigationItems/>
        </nav>
    </header>

);

export default toolbar;