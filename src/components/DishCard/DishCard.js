import React from 'react';
import {NavLink} from "react-router-dom";
import './DishCard.css';

const DishCard = props => {
    return (
        <div id={props.id} className="DishCard">
            <img src={props.img} alt="img"/>
            <p>{props.name}</p>
            <p>{props.price} KGS</p>
            <NavLink to={`/edit/${props.id}`}><button className="btn btn-warning">Edit</button></NavLink>
            <button className="btn btn-danger" onClick={() => props.removeDish(props.id)}>Delete</button>
        </div>
    );
};

export default DishCard;