import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from "react-router-dom";
import AuthContext from "../context/AuthContext";
import {render} from "react-dom";
import {useAuth} from "../provider/AuthProvider";

function ProtectedRoute({component: Component, ...rest}) {
    
    //Is Auth Context
    const isAuthContext = useAuth();
    let isAuth = isAuthContext.isAuth;

    useEffect(()=>{
        console.log(isAuth)
    },[isAuth])

    return <Route {...rest} render={(props)=>{
        if(isAuth){
            return <Component />
        }else{
            return <Redirect to={'/no-auth'}/>
        }
    }
    } />
}

export default ProtectedRoute;