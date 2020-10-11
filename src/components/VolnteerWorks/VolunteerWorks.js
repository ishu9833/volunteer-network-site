import React from 'react';
import { Card, Button, Container, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
const VolunteerWorks = (props) => {

    const { name, image } = props.volunteer;

    const history = useHistory();

    const handleRegister = () => {
        history.push("/register");
    }

    return (
            <div className="col-md-3">
                <div onClick={()=> props.handleAddWorks(props.volunteer)} class="card bg-primary" style={{ width: "15rem",margin:"5px",cursor:"pointer" , borderRadius: "10px"}}>
                    <img  style={{ height: "250px" }} src={image} class="card-img-top" alt="..." />
                    <div class="card-body" onClick={handleRegister}>
                        <p class="card-title"><small> <strong> {name}</strong></small></p>
                    </div>
                </div>
            </div>
    );
};

export default VolunteerWorks;