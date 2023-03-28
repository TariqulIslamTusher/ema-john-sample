import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <nav>
            <div className='header'>
                <img src={logo} alt="" />
                <div>
                    <a href="1">Shop</a>
                    <a href="2">order</a>
                    <a href="3">Inventory</a>
                    <a href="4">Log In</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;