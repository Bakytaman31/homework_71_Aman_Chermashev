import React from 'react';
import {NavLink} from "react-router-dom";

const DishCard = props => {
    return (
        <div>
            <img src={props.img} alt="img"/>
            <span>{props.name}</span>
            <span>{props.price} KGS</span>
            <NavLink><button className="btn btn-warning">Edit</button></NavLink>
            <button className="btn btn-danger" onClick={props.deleteDish}>Delete</button>
        </div>
    );
};

export default DishCard;