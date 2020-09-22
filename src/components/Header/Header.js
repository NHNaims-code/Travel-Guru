import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to="/login">
                        <button className="btn btn-warning">Login</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;