import React, { useContext, useState } from 'react';

import './Login.css';
import fb from "../../Icon/fb.png";
import google from "../../Icon/google.png";
import { initializeLoginFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithGoogle, signInWithFacebook, updateProfile } from './loginManager';
import { bookingContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

initializeLoginFramework();

const Login = () => {
    const [user, setUser] = useState({
        newUser: false,
        create: false,
    });
    const [currentResort, setCurrentResort, signedInUser, setSignedInUser] = useContext(bookingContext);
     // redirect
     let history = useHistory();
     let location = useLocation();
 
     let { from } = location.state || { from: { pathname: "/" } };
    // firebase
    const signInWithGoogleOption = () => {
        signInWithGoogle()
        .then(response => {
            setSignedInUser(response);
            response.email && history.replace(from);
        })
    }

    const signInWithFacebookOption = () => {
        signInWithFacebook()
        .then(response => {
            setSignedInUser(response);
            response.email && history.replace(from);
        })
    }


    const handleBlur = (event) => {
        let isFormValid = true;
        if(event.target.name === 'email'){
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if(event.target.name === 'password' || event.target.name === 'confirmPassword'){
            const minimumSixDigit = event.target.value.length > 5;
            // const isPasswordValided = /\S+\d+/.test(event.target.value);
            // !isPasswordValided?setSignedInUser({allErrors: "Passwords should have minium six Digit"}):setSignedInUser({});
        !minimumSixDigit?setSignedInUser({allErrors: "Passwords should have minium six Digit"}):setSignedInUser({});
           isFormValid = minimumSixDigit;
        }
    
        if(isFormValid){
          let newUserInfo = {...user};
          newUserInfo[event.target.name] = event.target.value;
          setUser(newUserInfo)
          console.log(user);
        }
      }

      const handleSubmit = (event) => {
        if(user.newUser && user.firstName && user.lastName && user.email && user.password){
            if(user.password === user.confirmPassword){
                createUserWithEmailAndPassword(user.email, user.password)
                .then(response => {
                    user.create = true;
                    updateProfile(user)
                    .then(res => {
                        setUser(res);
                    })
                })
            }else{
                setSignedInUser({allErrors: "Passwords are not match"})
            }
        }
        if(!user.newUser && user.email && user.password){
            signInWithEmailAndPassword(user.email, user.password)
            .then(response => {
                setSignedInUser(response);
                response.email && history.replace(from);
            })
        }
        event.preventDefault();
      }

    const handleLoginOrCreate = () => {
        const newUser = {...user}
        newUser.newUser = !user.newUser;
        setUser(newUser);
    }

   
    return (
        <div>
            {
                signedInUser.allErrors && <p className="alert alert-danger">{signedInUser.allErrors}</p>
            }
            {
                user.create && <div>Account successfully created. please login</div>
            }
            <form onSubmit={handleSubmit} className="form">
                {
                    user.newUser?<h4>Create an account</h4>:<h4>Login</h4> 
                }
                {
                    user.newUser && <input type="text" name="firstName" id="" placeholder="First Name" required onBlur={handleBlur}/>
                }
                {
                    user.newUser && <input type="text" name="lastName" id="" placeholder="Last Name" required onBlur={handleBlur}/> 
                }
                <input type="text" name="email" id="" placeholder="Username or Email" required onBlur={handleBlur}/>
                <input type="password" name="password" id="" placeholder="Password" required onBlur={handleBlur}/>
                {
                    user.newUser && <input type="password" name="confirmPassword" id="" placeholder="Confirm Password" required onBlur={handleBlur}/>
                }
                {
                    !user.newUser && 
                    <div className="remembar-forget">
                    <div className="mt-2">
                        <input className="m-1" type="checkbox" id="remember"/>
                        <label className="text-dark" htmlFor="remember">Remember me</label>
                    </div>
                    <div className="text-warning">
                        Forgot Password
                    </div>
                    </div>
                }
                {
                    user.newUser?<button className="btn btn-warning">Create an account</button>:<button className="btn btn-warning">Login</button>
                }
                
                {
                    user.newUser?<p className="pointer">Already have an account? <span className="text-warning" onClick={handleLoginOrCreate}>Login</span></p>:<p className="pointer">Don't have an account? <span className="text-warning" onClick={handleLoginOrCreate}>Create an account</span></p>
                }
                
            </form>
            <div className="bottom-group">
                <p className="or">or</p>
                <div className="login" onClick={signInWithFacebookOption}>
                    <img src={fb} alt=""/>
                    <span>Continue with Facebook</span>
                </div>
                <div className="login" onClick={signInWithGoogleOption}>
                    <img src={google} alt=""/>
                    <span>Continue with Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;