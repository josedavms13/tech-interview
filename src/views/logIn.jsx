import React,{useContext} from 'react';
import AuthContext from "../context/AuthContext";
import {useAuth} from "../provider/AuthProvider";
import {useHistory} from "react-router-dom";


function LogIn(props) {

    const {logIn, logOut} = useAuth()
    const history = useHistory();


    return (
        <div className={'log-in-page'}>
            <button onClick={()=>{logIn(()=>{
                //LOG IN CALLBACK
                history.push('/protected');

            })}}>Login</button>
            <button onClick={()=>{logOut(()=>{
                //LOG OUT CALLBACK
                history.push('/home');
            })}}>Logout</button>
        </div>
    );
}

export default LogIn;