import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
const controls=[
    {label:'Salad', type:'salad' },
    {label:'Bacon', type:'bacon' },
    {label:'Cheese', type:'cheese' },
    {label:'Meat', type:'meat' }

];
const BuildControls =(props)=>(
    

    <div className = {classes.BuildControls}>
        <p>Current price:<strong>{props.price}</strong></p>
    {controls.map(el=>
        <BuildControl 
            key = {el.label}
            label={el.label}
            added={()=>props.addIng(el.type)}
            removed={()=>props.removeIng(el.type)}
            disabled={props.disabled[el.type]}
            />
        
    )
    }
    <button className={classes.OrderButton} 
    disabled={!props.purchasable}
    onClick={props.purchased}>ORDER NOW</button>
</div>);     

    


export default BuildControls