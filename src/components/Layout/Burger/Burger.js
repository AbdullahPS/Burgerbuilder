import React from 'react'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css'
const burger =(props)=>{
    let ings =  Object.keys(props.burgerings).map(el=>//Object.key props returns an array of ings name[salad,cheese,meat]  
            //we need to return as example <BurgerIngredient type='key'> and the props.key holds the value
             {
           return [...Array(props.burgerings[el])].map((_,count)=>{ //here we get an array of two elements(valeu dont mattwer)

                  return <BurgerIngredient type = {el} key = {el +count}/>;

                
                                     })  
              }).reduce((arr,el)=>{return arr.concat(el)},[]) //this concats it to empty values
                                   // console.log(ings);
//we have an array of this.state ans want to transfer it into an array of ings
/**
 * Object
 *
 state{salad:x,pe"x,s:x}
}
 */

 //check weither the array is empty 
 if(ings.length===0)
 ings=<p>Pleae start adding ingredients</p>;
 return (
        <div className={classes.Burger}>
        <BurgerIngredient type ='bread-top'/>
        {ings}
        <BurgerIngredient type ='bread-bottom'/>
        </div>

    );
    

}
export default burger;