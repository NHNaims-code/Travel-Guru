import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { bookingContext } from '../../App';
import logo from '../../Logo.png';
import './Header.css';

const Header = () => {
    const [currentResort, setCurrentResort, signedInUser, setSignedInUser, user, setUser] = useContext(bookingContext);
    return (
        <>
        <div className="header pt-4 container">
            <Link to={'/'}><img className="logo" src={logo} alt=""/></Link>
            <input type="text" placeholder=  "search your Destination..."/>
            <div>
                <ul>
                    <li>News</li>
                    <li>Destination</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>
                        {
                            signedInUser.name?
                            <div><img style={{height:'40px', borderRadius:'50px'}} src={signedInUser.photo} alt=""/></div>:
                            <Link to="/login">
                            <button className="btn btn-warning">Login</button>
                            </Link>
                        }

                        
                    </li>
                </ul>
            </div>
        </div>
        <div>
        <h3 className="text-warning"><p>{signedInUser.name}</p></h3>
        </div>
        </>
    );
};

export default Header;