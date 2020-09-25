import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
        // console.log(firebase.apps.length);
    }
}

const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = ()=>{
   return firebase.auth().signInWithPopup(googleProvider)
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
        return signedInUser;
        
    }).catch(error => {
        return error.message;
    })
}

export const signInWithFacebook = () => {
    return firebase.auth().signInWithPopup(facebookProvider)
    .then(result => {
        const user = result.user;
        console.log(result.user.photo);
        const {displayName, photoURL, email} = user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          password:'',
          photo: photoURL,
          error: 'error working',
          success: true,
        }
        return signedInUser;
      }).catch(error => {
          return {allErrors: error.message}

      });
}


export const createUserWithEmailAndPassword = (email, password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
        return res;
    })
}

export const updateProfile = (user) => {
    var googlUser = firebase.auth().currentUser;
    return googlUser.updateProfile({
        displayName: user.firstName,
        photoURL: "https://i0.wp.com/bsnl.ch/wp-content/uploads/2019/03/avatar-default-circle.png?fit=260%2C260&ssl=1"
        }).then(res => {
            const newUser = {...user}
            newUser.create = true;
            return newUser;
            
        }).catch(function(err) {
            console.log(err.message);
        });
}


export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
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
                return signedInUser;
            }).catch(error => {
                return {allErrors: error.message}
            })
}