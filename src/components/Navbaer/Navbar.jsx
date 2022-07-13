import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__section">
                <div className="navbar__section__item_logo">
                    TodoApp
                </div>
                <div className="navbar__section__item button">
                    <NavLink to ="/">Главная</NavLink>
                </div>
               
            </div>
            <div className="navbar__section">
                 <div className="navbar__section__item button">
                    <NavLink to ="/about">Информация</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;