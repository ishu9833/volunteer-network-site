import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../App';

import { useState } from 'react';
import SingleProfile from './SingleProfile';

const Profile = () => {
    const { loggedInUser } = useContext(UserContext);
    const { email } = loggedInUser;
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("https://desolate-mesa-18957.herokuapp.com/userProfile/" + email)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [email])

    return (
         <div class="container">
             <h3 style={{textAlign:"center"}}>
                 Welcome {loggedInUser.name}
             </h3>
             <div class="row">
                {
                    user.map(data => <SingleProfile userData={data} ></SingleProfile>)
                }
            </div>
         </div>


    );
};

export default Profile;