import React from 'react';
import Ingredient from './Ingredient'

export default function RecipeCard (props) {
    // JSON dummies (ingredients)
    
    const banana = {label: "Banana", measurement: "1", unit: "whole", fat: "1g", carbs: "25g" }
    const almondMilk = {label: "Almond Milk", measurement: "1", unit: "cup", fat: "0g", carbs: "2g" }
    const yoghurt = {label: "Yoghurt", measurement: "1", unit: "quarter cup", fat: "6g", carbs: "15g" }
    
    // JSON data to fetch
    
    const americanCheese = {label: "American Cheese", measurement: "1", unit: "slice", fat: "8g", carbs: "2g" }
    
    // States

    const [ingredientsArr, setIngredientsArray] = React.useState([banana, almondMilk, yoghurt])

    
    // Functions

    function sumNutrient (array, prop) {
        let total = 0
        
        if(Array.isArray(array)){
            array.forEach(nutrient=>{
                total = total + parseInt(nutrient[prop])
            })
        }
        // FELT FAT, MIGHT DELETE LATER
        if(total>100){
            window.alert("You're Gonna Die")
            return "FAT"
        } else {
            return total
        }
    }
    
    function handleAddIngredient (newIngredient) {
        console.log(ingredientsArr)
        setIngredientsArray(ingredientsArr.concat(americanCheese))
    }

    function handleRemoveIngredient (event) {
        console.log(event.target)
        ingredientsArr.splice(event.target.index);
    }

    
    return (
        <div className="Recipe-Card">
            <div className="Recipe-Card__Header">
                <h2 className="Recipe-Card__Label">Banana Smoothie!</h2>
            </div>
            <div className="Recipe-Card__Totals">
                <div>{sumNutrient(ingredientsArr, "fat")} grams of fat</div>
                <div>{sumNutrient(ingredientsArr, "carbs")} grams of carbs</div>
            </div>
            <div className="RecipeCard__Ingredients-Container">

                {ingredientsArr.map((ingredient, index)=>{
                        return( 
                            <Ingredient 
                                key={index}
                                remove={(event)=> handleRemoveIngredient(event)}
                                label={ingredient.label}
                                measurement={ingredient.measurement} 
                                unit={ingredient.unit}
                                fat={ingredient.fat}
                                carbs={ingredient.carbs}

                            />
                        ) 
                    })
                }
                
                <div
                className="add-ingredient"
                onClick={()=>{
                    handleAddIngredient(americanCheese)}}>
                    Add

                </div>

            </div>
        </div>
    )
}