import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Resource/logos/Group 1329.png';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../LoginUser/firebaseConfig';



// firebase.initializeApp(firebaseConfig);
const SignUpUser = () => {


    // const [user, setUser] = useState({
    //     isSignedIn: false,
    //     name: '',
    //     email: '',
    //     password: ''
    // });



    // const handleBlur = (e) => {
    //     let isSignUpFormValid = true;
    //     if (e.target.name === "email") {
    //         isSignUpFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    //     }
    //     if (e.target.name === "password") {
    //         const isPasswordValid = e.target.value.length > 8;
    //         const passwordHasNumber = /\d{3}/.test(e.target.value);
    //         isSignUpFormValid = isPasswordValid && passwordHasNumber;
    //     }
    //     if (isSignUpFormValid) {
    //         const newUserInfo = { ...user };
    //         newUserInfo[e.target.name] = e.target.value;
    //         setUser(newUserInfo);
    //     }
    // }
    // const handleSubmit = (e) => {
    //     if (user.email && user.password) {
    //         firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                // .then(res => {
                //     console.log(res);
                //     const createdUser = { ...user }
                //     createdUser.isSignedIn = false;
                //     createdUser.error = '';
                //     setUser(createdUser);
                // })

        //         .catch(function (error) {
        //             // Handle Errors here.
        //             var errorCode = error.code;
        //             var errorMessage = error.message;
        //             console.log(error.code, error.massage);
        //             // ...
        //         });
        // }
        // e.preventDefault();
        // e.target.reset();
    // }

    // const signInUser = e => {
    //     if (user.isValid) {
    //         firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    //             .then(res => {
    //                 console.log(res);
    //                 const createdUser = { ...user };
    //                 createdUser.isSignedIn = true;
    //                 createdUser.error = '';
    //                 setUser(createdUser);
    //             })
    //             .catch(err => {
    //                 console.log(err.message);
    //                 const createdUser = { ...user };
    //                 createdUser.isSignedIn = false;
    //                 createdUser.error = err.message;
    //                 setUser(createdUser);
    //             })
    //     }
    //     e.preventDefault();
    //     e.target.reset();
    // }
    return (
        <div class="container col-md-4 " style={{ width:"300px",border: "1px solid lightGray", padding:"30px", borderRadius:"10px", margin:"20vh auto auto"}}>
            <div class="container">
                <img style={{width:"150px"}} src={logo} alt=""/>
            </div>
            <br/>
           <form action="">
               <div>
               <input type="name" name="name"  placeholder="Full Name" class="form-control" required />
               <br/>
               <input type="email" name="email"  placeholder="Email Address" class="form-control" required/>
               <br/>
               <input type="password" name="password"  placeholder="Password" class="form-control"required />
               <br/>
               <Link><input type="submit" style={{width:"240px", height:"40px", backgroundColor:"#339DFF", border:"none", borderRadius:"7px"}} value="Sign up"/></Link>
               </div>
               
           </form>
        </div>
    );
};

export default SignUpUser;