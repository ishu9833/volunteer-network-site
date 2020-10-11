import React, { useContext } from 'react';
// import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from "../Resource/logos/Group 1329.png";



const Header = () => {
    return (
    
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <Link class="navbar-brand" to="/"> <img style={{width:"150px"}} src={logo} alt=""/> </Link>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <Link class="nav-link active" to="/home">Home <span class="sr-only">(current)</span></Link>
                        <Link class="nav-link" to="/donation">Donation</Link>
                        <Link class="nav-link" to="/events">Events</Link>
                        <Link class="nav-link "to="/blog" >Blog</Link>
                        <Link class="nav-link "to="/register" > <button  class="btn btn-primary">Register</button> </Link>
                        <Link class="nav-link "to="/adminLogin" ><button  class="btn btn-dark">Admin</button> </Link>
                        <Link class="nav-link "to="/profile" ><button  class="btn btn-info">Profile</button> </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;