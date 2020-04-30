import React from 'react';
import Nutrient from './Nutrient'


export default function Ingredient (props) {

    return (
        <div className="Ingredient">
            <div className="Ingredient__Name">{props.label}</div>
    <div className="Ingredient__Serving">{props.measurement} {props.unit}</div>
            <hr />
            <Nutrient label="Fat" value="2" measurement="g" index="1"></Nutrient>
            <hr />
            <Nutrient label="Calories" value="150" measurement="g" index="2"></Nutrient>
            <hr />
            <Nutrient label="Carbs" value="15" measurement="g" index="3"></Nutrient>
            <hr />
        </div>
    )
}