import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import fb from "../../Icon/fb.png";
import google from "../../Icon/google.png";
import firebaseConfig from './firebase.config';
import { bookingContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useState({
        newUser: false
    });
    const [currentResort, setCurrentResort, signedInUser, setSignedInUser] = useContext(bookingContext);
    // firebase
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log(signedInUser);
    const signInWithGoogle = ()=>{
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName, photoURL, email} = res.user;
            const signedInUser = {
              isSignedIn: false,
              name: displayName,
              email: email,
              password:'',
              photo: photoURL,
              error: 'error working',
              success: true,
            }
            setSignedInUser(signedInUser);
        })
    }

    const handleBlur = (event) => {
        console.log(event.target.name, event.target.value);
        let isFormValid = true;
        if(event.target.name === 'email'){
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if(event.target.name === 'password'){
            const minimumSixDigit = event.target.value.length > 5;
            const isPasswordValided = /\S+\d+/.test(event.target.value);
    
           isFormValid = minimumSixDigit && isPasswordValided;
        }
    
        if(isFormValid){
          let newUserInfo = {...user};
          newUserInfo[event.target.name] = event.target.value;
          setUser(newUserInfo)
          console.log(user);
        }
      }

      const handleSubmit = (event) => {
        if(user.newUser && user.firstName && user.lastName && user.email && user.password === user.confirmPassword){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                console.log(res);
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
            <form onSubmit={handleSubmit} className="form">
                {
                    user.newUser?<h4>Create an account</h4>:<h4>Login</h4> 
                }
                {
                    user.newUser && <input type="text" name="firstName" id="" placeholder="First Name" onBlur={handleBlur}/>
                }
                {
                    user.newUser && <input type="text" name="lastName" id="" placeholder="Last Name" onBlur={handleBlur}/> 
                }
                <input type="text" name="email" id="" placeholder="Username or Email" onBlur={handleBlur}/>
                <input type="password" name="password" id="" placeholder="Password" onBlur={handleBlur}/>
                {
                    user.newUser && <input type="password" name="confirmPassword" id="" placeholder="Confirm Password" onBlur={handleBlur}/>
                }
                {
                    !user.newUser && 
                    <div className="remembar-forget">
                    <div className="mt-2">
                        <input className="m-1" type="checkbox" name="" id="remember"/>
                        <label className="text-dark" for="remember">Remember me</label>
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
                    user.newUser?<p>Already have an account? <span className="text-warning" onClick={handleLoginOrCreate}>Login</span></p>:<p>Don't have an account? <span className="text-warning" onClick={handleLoginOrCreate}>Create an account</span></p>
                }
                
            </form>
            <div className="bottom-group">
                <p className="or">or</p>
                <div className="login">
                    <img src={fb} alt=""/>
                    <span>Continue with Facebook</span>
                </div>
                <div className="login" onClick={signInWithGoogle}>
                    <img src={google} alt=""/>
                    <span>Continue with Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;