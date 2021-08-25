import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {useAuth} from "../provider/AuthProvider";


function Home(props) {

    const history = useHistory();

    const {user} = useAuth();

    const [askToLogin, setAskToLogin] = useState(false);

    // If user is logged won't ask to log in.
    useEffect(() => {
        console.log(user)
        if(user.isAuth){
            setAskToLogin(false);
        }else{

            setAskToLogin(true);
        }
    }, []);


    return (
        <div>
            {askToLogin && <button onClick={() => history.push('/log-in')}>Login</button>}
        </div>
    );
}

export default Home;