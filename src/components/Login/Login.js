import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import fb from "../../Icon/fb.png";
import google from "../../Icon/google.png";
import firebaseConfig from './firebase.config';
import { bookingContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

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
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    console.log(signedInUser);
    const signInWithGoogle = ()=>{
        firebase.auth().signInWithPopup(googleProvider)
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
                history.replace(from);
        }).catch(error => {
            setSignedInUser({allErrors: error});
        })
    }
    const signInWithFacebook = () => {
        firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
            const user = result.user;
            console.log(result.user.photo);
            const {displayName, photo, email} = user;
            const signedInUser = {
              isSignedIn: true,
              name: displayName,
              email: email,
              password:'',
              photo: photo,
              error: 'error working',
              success: true,
            }
            setSignedInUser(signedInUser);
                history.replace(from);
          }).catch(err => {
            setSignedInUser({allErrors : err.message})
          });
    }

    const handleBlur = (event) => {
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
                var googlUser = firebase.auth().currentUser;
                googlUser.updateProfile({
                displayName: user.firstName,
                photoURL: "https://i0.wp.com/bsnl.ch/wp-content/uploads/2019/03/avatar-default-circle.png?fit=260%2C260&ssl=1"
                }).then(res => {
                    const newUser = {...user}
                    newUser.create = true;
                    setUser(newUser);
                }).catch(function(err) {
                    setSignedInUser({allErrors : err.message})
                });
            })
        }
        if(!user.newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                console.log(res);
                const {displayName, photoURL, email} = res.user;
                const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                password:'',
                photo: photoURL,
                success: true,
                }
                setSignedInUser(signedInUser);
                history.replace(from);
            }).catch(err => {
                setSignedInUser({allErrors : err.message})
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
            <p className="text-danger">Error Show {signedInUser.allErrors}</p>
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
                <div className="login" onClick={signInWithFacebook}>
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