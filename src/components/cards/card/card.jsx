import React from 'react';

import './card.css';


export const Card = (props) => (
    <div className='card-container'>
        <h1>
            <img alt={props.monster.name} src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        </h1>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)
