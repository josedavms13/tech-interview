import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {useAuth} from "../provider/AuthProvider";

import './viewsStyles/Home.css'

function Home(props) {

    const history = useHistory();

    const {user} = useAuth();

    const [askToLogin, setAskToLogin] = useState(false);
    const [welcomeMessage, setWelcomeMessage] = useState('Please log in');

    // If user is logged won't ask to log in.
    useEffect(() => {
        console.log(user)
        if(user.isAuth){
            setAskToLogin(false);
            setWelcomeMessage('Thanks for been logged')
        }else{

            setAskToLogin(true);
        }
    }, []);


    return (
        <div className={'home'}>
            <h1>Welcome</h1>
            <h5>{welcomeMessage}</h5>
            <h5>{user.name}</h5>
            {askToLogin && <button onClick={() => history.push('/log-in')}>Login</button>}
        </div>
    );
}

export default Home;