import React, { useEffect, useState } from 'react';
import { Container, Table, Nav } from 'react-bootstrap';
import ShowRegisteredUser from './ShowRegisteredUser';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';

import logo from "../Resource/logos/Group 1329.png";


const RegisterList = () => {
    const [registeredUser, setRegisteredUser] = useState([]);


    useEffect(() => {
        fetch('https://desolate-mesa-18957.herokuapp.com/getRegisteredUser')
            .then(res => res.json())
            .then(data => setRegisteredUser(data))
    }, [])
    return (
        <div>
            <div style={{ width: "30%", margin: "20px", boxShadow: "0px 0px 1px 0px lightGray" }}>
                <img onClick="/home" style={{ width: "150px" }} src={logo} alt="" />
                <br />
                <Nav.Link href="/registerList"><h6 style={{ alignItems: "center" }}> <BsFillPeopleFill /> volunteer register list</h6></Nav.Link>
                <Nav.Link href="/admin"> <h6> <AiOutlinePlus /> Add Events</h6></Nav.Link>
            </div>
            <div class="container">
                <table class='table table-light'>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Registreted Date </th>
                            <th scope="col">Volunteer List</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr scope="col">
                            <td>
                                {
                                    registeredUser.map(data => <ShowRegisteredUser user={data}></ShowRegisteredUser>)
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RegisterList;