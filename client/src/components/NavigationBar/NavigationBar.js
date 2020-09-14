import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';

const NavigationBar = () => {
    return (
        <nav className="navbar">

            <NavigationBarLinkWrapper>
                <NavLink
                    exact
                    to="/pizzas"
                    activeClassName="active"
                ><img src="https://s14.postimg.org/59h2h3v8x/Untitled2.png" width="150px" alt="logo" /></NavLink>
                <NavLink
                    exact
                    to="/pizzas"
                    activeClassName="active"
                    className="nav-link">Menu</NavLink>
                <NavLink
                    to="/offers"
                    activeClassName="active"
                    className="nav-link">Offers</NavLink>
                <NavLink
                    to="/cart"
                    activeClassName="active"
                    className="nav-link">Cart</NavLink>
                <NavLink
                    to="/about"
                    activeClassName="active"
                    className="nav-link">About</NavLink>
            </NavigationBarLinkWrapper>
        </nav>
    );
};

// Fix for react-router-dom, known bug with NavLink
export default NavigationBar;
