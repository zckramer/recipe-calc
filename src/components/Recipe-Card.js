import React from 'react';
import Ingredient from './Ingredient'

export default function RecipeCard (props) {
    
    
    return (
        <div className="Recipe-Card">
            <h2 className="Recipe-Card__Title" >Banana Smoothie!</h2>
            <div className="Recipe-Card__Header">
                <span className="Recipe-Card__Label"></span>        
                <span className="Recipe-Card__Data"></span>
            </div>
            <div className="Recipe-Card__Totals">
                
            </div>
                <Ingredient />  {/* Any single ingredient will be composed of 3 objects: 
                            a label(Fat/Carbs/etc), a numerical value, and a measurement(g/mg/etc)*/}
        </div>
    )
}