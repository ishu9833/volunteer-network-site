import React, { useContext, useState } from 'react';
import { ImCancelCircle } from 'react-icons/im'
import { UserContext } from '../../App';
import image from '../Resource/images/data.jpg'

const SingleProfile = (props) => {
    const [deleteItems, setDeleteItems] = useState([]);
    const { eventName, date , _id} = props.userData;
    const handleDeleteWorks = (id) => {
        fetch(`https://desolate-mesa-18957.herokuapp.com/delete/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(result => setDeleteItems(result))
    }
    return (
        <>
            
        
            <div className="col-md-6">
            <div class="card" style={{ width: "15rem",margin:"5px",cursor:"pointer" , borderRadius: "10px"}}>
            <img  style={{ height: "150px", border:"15px" }} src={image} class="card-img-top" alt="..." />
            <div class="card-body" >
                <p class="card-title"><small> <strong> {eventName}</strong></small></p>
                <div style={{display:"inline-block"}}>
                <p class="card-title"><small>  {date}</small></p>
                <button onClick={() => handleDeleteWorks(_id)} class="btn btn-danger">< ImCancelCircle/> Cancel</button>
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default SingleProfile;