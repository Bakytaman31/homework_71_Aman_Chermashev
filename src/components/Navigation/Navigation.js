import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">Turtle Pizza Admin</span>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link">Dishes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to='/orders'>Orders</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;