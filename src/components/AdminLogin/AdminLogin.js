import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Resource/logos/Group 1329.png';
const AdminLogin = () => {
    return (
        <div class="container col-md-4 " style={{ width:"300px",border: "1px solid lightGray", padding:"30px", borderRadius:"10px", margin:"20vh auto auto"}}>
            <div class="container" style={{textAlign:"center", fontFamily:"sans-serif", color:"lightGray"}} >
                <img style={{width:"150px"}} src={logo} alt=""/>
                <br/>
                <br/>
                <h4><b>Admin Login</b></h4>
            </div>
            <br/>
            
           <form action="">
               <div>
               <input type="email" placeholder="Email Address" class="form-control" required/>
               <br/>
               <input type="password" placeholder="Password" class="form-control"required />
               <br/>
               <Link to="/admin"> <button type="login" class="btn btn-primary" style={{width:"240px", height:"40px"}}>Log in</button></Link>
               </div>
               
           </form>
        </div>
    );
};

export default AdminLogin;