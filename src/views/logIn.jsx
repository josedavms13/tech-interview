import React, {useContext, useEffect, useState} from 'react';
import AuthContext from "../context/AuthContext";
import {useAuth} from "../provider/AuthProvider";
import {useHistory} from "react-router-dom";


function LogIn(props) {

    const {logIn, logInAsAdmin, logOut} = useAuth()
    const history = useHistory();

    const [userNameInput, setUserNameInput] = useState('');

    const [showNext, setShowNext] = useState(false);

    useEffect(() => {
        if(userNameInput){
            setShowNext(true)
        }else{
            setShowNext(false)
        }
    }, [userNameInput]);



    return (
        <div className={'log-in-page'}>

            <form onSubmit={e=>e.preventDefault()}>
                <label>Please type your name:</label>
                <input required={'required'} type="text" onChange={(e) => {
                    setUserNameInput(e.target.value)
                }}/>

                {showNext && <div className="submit-button-container">
                    <button type={'submit'} onClick={() => {
                        logIn(userNameInput, () => {
                            //LOG IN CALLBACK
                            history.push('/');

                        })
                    }}>Login
                    </button>

                    <button type={'submit'} onClick={() => {
                        logInAsAdmin(userNameInput, () => {
                            //LOG IN CALLBACK
                            history.push('/');

                        })
                    }}>Login as Admin
                    </button>
                </div>}


            </form>
            <button onClick={() => {
                logOut(() => {
                    //LOG OUT CALLBACK
                    history.push('/log-in');
                })
            }}>Logout
            </button>
        </div>
    );
}

export default LogIn;