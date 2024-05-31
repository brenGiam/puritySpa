import React from 'react';

const StarRating = ({ count, value, size, activeColor, inactiveColor, onChange, edit = true
}) => {
    const stars = [];

    //si se hace click en estrella
    const handleClick = (newValue) => {
        if (edit && onChange) {
            onChange(newValue); // Llama a la función onChange con el valor de la estrella clickeada//handleRatingChange
        }
    };

    //bucle para crear las estrellas
    for (let i = 1; i <= count; i++) {
        stars.push(
            <span
                key={i}
                style={{
                    fontSize: size,
                    color: i <= value ? activeColor : inactiveColor,
                    cursor: edit ? 'pointer' : 'default'
                }}
                onClick={() => handleClick(i)} // Llama a handleClick con el valor de la estrella clickeada
            >
                ★
            </span>
        );
    }

    return <div>{stars}</div>;
};

export default StarRating;