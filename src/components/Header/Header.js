import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link } from 'react-router-dom';
import { bookingContext } from '../../App';
import logo from '../../Logo.png';
import './Header.css';

const Header = () => {
    const [currentResort, setCurrentResort, signedInUser, setSignedInUser, user, setUser] = useContext(bookingContext);
    const logOut = () => {
        firebase.auth().signOut().then(function() {
            setSignedInUser({})
          }).catch(function(error) {
            console.log(error.message);
          });
    }
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
        {
            signedInUser.name &&
            <div className="d-flex justify-content-center text-center">
            <h3 className="text-warning">{signedInUser.name}</h3>
            <div className="text-white btn btn-sm btn-danger" id="logout" onClick={logOut}>Logout</div>
            </div>
        }
        </>
    );
};

export default Header;