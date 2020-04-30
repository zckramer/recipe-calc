import React from 'react';

export default function Nutrient (props) {

    return (
        <>
            {props.label} - {props.value}{props.measurement}
        </>
    )
}