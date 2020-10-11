import React from 'react';
import { Container, Nav, Table } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';


const ShowRegisteredUser = (props) => {
    const { email, date, eventName, name } = props.user;
    return (
        <div>

            <div>
                <table class="table">
                    <tbody>
                        <td>{eventName}</td>
                        <td>{email}</td>
                        <td>{date}</td>
                        <td>{name}</td>
                        <td><AiFillDelete/></td>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ShowRegisteredUser;