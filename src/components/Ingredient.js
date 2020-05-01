import React from 'react';


export default function Ingredient (props) {

    return (
        <div className={`Ingredient`}>
            <span className="Ingredient__Name">{props.label}</span>
            <hr />
            <span className="Ingredient__Serving">{props.measurement} {props.unit}</span>
            <hr />
            <span className="Ingredient__Fat">{props.fat} fat</span>
            <hr />
            <span className="Ingredient__Carbs">{props.carbs} carbs</span>
            <hr />
            <div className="Ingredient__Remove" onClick={props.remove}>X</div>
        </div>
    )
}