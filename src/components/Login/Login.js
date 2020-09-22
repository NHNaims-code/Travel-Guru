import React, { useState } from 'react';
import './Login.css';
import fb from "../../Icon/fb.png";
import google from "../../Icon/google.png";



const Login = () => {
    const [user, setUser] = useState({
        status: false
    });

    const handleLoginOrCreate = () => {
        const newUser = {...user}
        newUser.status = !user.status;
        setUser(newUser);
    }
    return (
        <div>
            <form action="" className="form">
                {
                    !user.status?<h4>Create an account</h4>:<h4>Login</h4> 
                }
                {
                    !user.status && <input type="text" name="" id="" placeholder="First Name"/>
                }
                {
                    !user.status && <input type="text" name="" id="" placeholder="Last Name"/> 
                }
                <input type="text" name="" id="" placeholder="Username or Email"/>
                <input type="password" name="" id="" placeholder="Password"/>
                {
                    !user.status && <input type="password" name="" id="" placeholder="Confirm Password"/>
                }
                {
                    user.status && 
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
                    !user.status?<button className="btn btn-warning">Create an account</button>:<button className="btn btn-warning">Login</button>
                }
                
                {
                    !user.status?<p>Already have an account? <span className="text-warning" onClick={handleLoginOrCreate}>Login</span></p>:<p>Don't have an account? <span className="text-warning" onClick={handleLoginOrCreate}>Create an account</span></p>
                }
                
            </form>
            <p className="or">or</p>
            <div className="login">
                <img src={fb} alt=""/>
                <span>Continue with Facebook</span>
            </div>
            <div className="login">
                <img src={google} alt=""/>
                <span>Continue with Google</span>
            </div>
        </div>
    );
};

export default Login;