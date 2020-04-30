import React from 'react';


export default function Ingredient (props) {

    return (
        <div className="Ingredient">
            <div className="Ingredient__Name">{props.label}
                <div className="Ingredient__Serving">{props.measurement} {props.unit}
                    <hr />
                    <span className="Nutrient-Label__Fat">{props.fat} fat</span>
                    <hr />
                    <span className="Nutrient-Label__Carbs">{props.carbs} carbs</span>
                    <hr />
                </div>
            </div>
        </div>
    )
}