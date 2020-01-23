import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Dishes extends Component {
    render() {
        return (
            <div>
                <h1>Dishes</h1>
                <NavLink to='/add'><button className='btn btn-primary'>Add Dish</button></NavLink>

            </div>
        );
    }
}

export default Dishes;