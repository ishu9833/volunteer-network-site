import React, { useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../Resource/logos/Group 1329.png'
// import { useForm } from 'react-hook-form';

const Register = () => {
    const { works, loggedInUser } = useContext(UserContext);
    const { name } = works;
    // console.log(name);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { 
        console.log(data);
        fetch('https://desolate-mesa-18957.herokuapp.com/addVolunteers', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your Registration Successfully');
            }
        })
    }
    return (
        <div>
            <Container style={{ width: "30%", marginTop: "50px" }}>
                <img style={{ width: "170px", marginLeft: "100px" }} src={logo} alt="" />
                <Form onSubmit={handleSubmit(onSubmit)} style={{ border: "none", margin: "20px", boxShadow: "1px 1px 1px 1px lightGray" }}>
                    <Form.Group style={{ margin: "20px" }} controlId="formBasicEmail">
                        <Form.Control name="name" ref={register({ required: true })} type="text" placeholder="Full Name" defaultValue={loggedInUser.name} />
                        {errors.name && <span>This field is required</span>}
                        <br />
                        <Form.Control name="email" ref={register({ required: true })} type="email" placeholder="Username or email" defaultValue={loggedInUser.email} />
                        {errors.email && <span>This field is required</span>}
                        <br />
                        <Form.Control name="date" ref={register({ required: true })} type="date" placeholder="Date" />
                        {errors.date && <span>This field is required</span>}
                        <br />
                        <Form.Control name="description" ref={register({ required: true })} type="text" placeholder="Description" />
                        {errors.description && <span>This field is required</span>}
                        <br />
                        <Form.Control name="eventName" ref={register({ required: true })} type="text" placeholder="Organize books at the library" defaultValue={name} />
                        {errors.eventName && <span>This field is required</span>}
                    </Form.Group>
                    <Link>    <Button onClick={handleSubmit(onSubmit)} style={{ margin: "20px", paddingLeft: "105px", paddingRight: "105px" }} variant="primary" type="submit">
                        Registration
                    </Button>
                    </Link>
                </Form>
            </Container>
        </div>
    );

};
export default Register;