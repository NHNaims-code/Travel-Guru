import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { bookingContext } from '../../App';
import logo from '../../Logo.png';
import './Header.css';

const Header = () => {
    const [currentResort, setCurrentResort, signedInUser, setSignedInUser, user, setUser] = useContext(bookingContext);
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
                        {
                            signedInUser.name?<img style={{height:'40px', borderRadius:'50px'}} src={signedInUser.photo} alt=""/>:
                            <Link to="/login">
                            <button className="btn btn-warning">Login</button>
                            </Link>
                        }

                        
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;