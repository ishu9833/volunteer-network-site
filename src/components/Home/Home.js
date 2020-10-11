import React, { useContext, useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Register from '../Register/Register';
// import { Row } from 'react-bootstrap';
import VolunteerWorks from '../VolnteerWorks/VolunteerWorks';
import { UserContext } from '../../App';

const Home = () => {
    const {setWorks} = useContext(UserContext);
    
    const [volunteerWorks, setVolunteerWorks] = useState([]);

    
    const handleAddWorks = (volunteer) => {
        setWorks(volunteer);
    }

    useEffect(()=> {
        fetch('https://desolate-mesa-18957.herokuapp.com/works')
        .then(res => res.json())
        .then(data => setVolunteerWorks(data))
    },[])
    
    return (
        <>
        {/* <h4>{works.length}</h4> */}
            <div className="container">
                <div className="container col-md-4" >
                    <form class="form-inline my-2 my-lg-5">
                        <input class="form-control mr-sm-0" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-primary my-2 my-sm-3" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        volunteerWorks.map(vw => <VolunteerWorks handleAddWorks={handleAddWorks} volunteer={vw}></VolunteerWorks>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;