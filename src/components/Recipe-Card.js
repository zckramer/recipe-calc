import React from 'react';
import Ingredient from './Ingredient'

export default function RecipeCard (props) {
    // JSON dummies (ingredients)
    
    const banana = {label: "Banana", measurement: "1", unit: "whole", fat: "1g", carbs: "25g" }
    const almondMilk = {label: "Almond Milk", measurement: "1", unit: "cup", fat: "0g", carbs: "2g" }
    const yoghurt = {label: "Yoghurt", measurement: "1", unit: "1/4 cup", fat: "6g", carbs: "15g" }
    
    // States
    const [recipe, setRecipe] = React.useState()
    const [nutArray, setNutArray] = React.useState([banana, almondMilk, yoghurt])
    
    function sumNutrient (nutArr, prop) {
        let total = 0
        
        nutArr.forEach(nutrient=>{
            total = total + parseInt(nutrient[prop])
        })
        
        return total
    }
    
    


    
    return (
        <div className="Recipe-Card">
            <h2 className="Recipe-Card__Title" >Banana Smoothie!</h2>
            <div className="Recipe-Card__Header">
                <span className="Recipe-Card__Label"></span>        
                <span className="Recipe-Card__Data"></span>
            </div>
            <div className="Recipe-Card__Totals">
                <div>{sumNutrient(nutArray, "fat")} grams of fat</div>
                <div>{sumNutrient(nutArray, "carbs")} grams of carbs</div>
            </div>
            <div className="RecipeCard__Ingredients-Container">
                <Ingredient 
                    label={banana.label}
                    measurement={banana.measurement} 
                    unit={banana.unit}
                    fat={banana.fat}
                    carbs={banana.carbs}

                /> 
                <Ingredient 
                    label={almondMilk.label}
                    measurement={almondMilk.measurement}
                    unit={almondMilk.unit}
                    fat={almondMilk.fat}
                    carbs={almondMilk.carbs}

                />
                <Ingredient 
                    label={yoghurt.label} 
                    measurement={yoghurt.measurement}
                    unit={yoghurt.unit}
                    fat={yoghurt.fat}
                    carbs={yoghurt.carbs}

                />
            </div>
        </div>
    )
}