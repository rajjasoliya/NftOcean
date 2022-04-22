import React from 'react';
import './card.css';
export const Card = (props) => (
    <div className="card-container">
        <img className="card-icon" src={`assets/nft/${props.card.id}.png`} alt="nft" />
        <p>{props.card.name}</p>
        <button className="card-btn">Buy</button>
    </div>
)
