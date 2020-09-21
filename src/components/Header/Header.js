import React from 'react';
import logo from '../../Logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header pt-4 container">
            <img className="logo" src={logo} alt=""/>
            <input type="text" placeholder=  "search your Destination..."/>
            <div>
                <ul>
                    <li>News</li>
                    <li>Destination</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>
                        <button className="btn btn-warning">Login</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;