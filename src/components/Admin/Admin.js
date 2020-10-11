import React from 'react';
import { Container, Form, Button, Col, Nav, Navbar } from 'react-bootstrap';
import logo from "../Resource/logos/Group 1329.png"
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        // console.log(data.name, data.date);
        const eventDetails = {name: data.name, events: data}
        fetch('https://desolate-mesa-18957.herokuapp.com/addWorks', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventDetails)
        })
    }
    return (

        <div style={{ display: "flex" }}>
            <div style={{ width: "30%", margin: "20px", boxShadow: "0px 0px 1px 0px lightGray" }}>
               <Link to="/home"> <img style={{ width: "150px" }} src={logo} alt="" /></Link>
                <br />
                <Link to="/registerList"><h6 style={{ alignItems: "center" }}> <BsFillPeopleFill /> volunteer register list</h6></Link>
                <Link to="/admin"> <h6> <AiOutlinePlus /> Add Events</h6></Link>
            </div>
            <div style={{ width: "70%" }}>

                <Container>
                    <h5 style={{ margin: "20px" }}>Add Events</h5>
                    <Form onSubmit={handleSubmit(onSubmit)} style={{ border: "none", margin: "20px", boxShadow: "0px 1px 0px 1px lightGray", padding: "20px" }}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Event Title</Form.Label>
                                <Form.Control name="name" ref={register({ required: true })} type="text" placeholder="Event title" />
                                {errors.name && <span>event title is required</span>}
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Date</Form.Label>
                                <Form.Control name="date" ref={register({ required: true })}  type="date" placeholder="Date" />
                                {errors.date && <span>date is required</span>}
                            </Form.Group>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control name="description" ref={register({ required: true })} type="text" placeholder="Description" />
                                {errors.description && <span>description is required</span>}
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.File name="file" ref={register({ required: true })} id="exampleFormControlFile1" label="Banner" />
                                {errors.file && <span>file is required</span>}
                            </Form.Group>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Link>
                                    <Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)}>
                                        Submit
                                </Button>
                                </Link>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Container>

            </div>
        </div >

    );
};

export default Admin;