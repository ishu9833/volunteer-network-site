import React, { useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import logo from '../Resource/logos/Group 1329.png';
import { FcGoogle } from 'react-icons/fc';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);
const LoginUser = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/register" } };


    
    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from)

        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });

    }

    return (
        <div className="container col-md-4" style={{paddingTop:"10%"}}>

            <div className="card text-center" style={{height:"250px", width:"500px" , padding:"10px"}}>
            <div className="">
                    <img className="" style={{ width: "200px" }} src={logo} alt="" />
                </div>
                <div className="card-body">
                    <h5><strong> Login User</strong></h5>
                    <button style={{border:"none", backgroundColor:"white" ,borderRadius:"20px", padding:"10px", margin:"5px"}} onClick={handleGoogleSignIn}>
                        <FcGoogle />  <b> login with google</b>
                    </button>
                    <br/>
                    <p><small><b>Don't have an account? <Link to="/signUpUser">Create a new account</Link> </b></small></p>
                </div>
            </div>
        </div>
    );
};

export default LoginUser;