import React, {useContext, useState} from 'react';
import AuthContext from "../context/AuthContext";
import {useAuth} from "../provider/AuthProvider";
import {useHistory} from "react-router-dom";


function LogIn(props) {

    const {logIn, logInAsAdmin , logOut} = useAuth()
    const history = useHistory();

    const [userNameInput, setUserNameInput] = useState('');


    return (
        <div className={'log-in-page'}>

            <label>Please type your name:</label>
            <input required={true} type="text" onChange={(e)=>{setUserNameInput(e.target.value)}}/>

            <button onClick={()=>{logIn(userNameInput,()=>{
                //LOG IN CALLBACK
                history.push('/');

            })}}>Login</button>

            <button onClick={()=>{logInAsAdmin( userNameInput ,()=>{
                //LOG IN CALLBACK
                history.push('/');

            })}}>Login as Admin</button>

            <button onClick={()=>{logOut(()=>{
                //LOG OUT CALLBACK
                history.push('/log-in');
            })}}>Logout</button>
        </div>
    );
}

export default LogIn;