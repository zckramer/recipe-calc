import React from 'react';

export default function Nutrient (props, index) {
    const label = props.label;
    const value = props.value;
    const measurement = props.measurement;
    const nutrientClass = 'Ingredient__Info' + index;
    return (
        <div className={nutrientClass}>
            <span>{label} - - -> {value}{measurement}</span>
        </div>
    )
}