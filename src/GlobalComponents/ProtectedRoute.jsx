import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from "react-router-dom";
import AuthContext from "../context/AuthContext";
import {render} from "react-dom";
import {useAuth} from "../provider/AuthProvider";

function ProtectedRoute({needAdmin:needAdmin, component: Component, ...rest}) {
    
    
    
    //Is Auth Context
    const userContext = useAuth();
    const isAuth = userContext.user;

    return <Route {...rest} render={(props)=>{
        if(isAuth.isAuth){
            if(needAdmin){
                if(isAuth.isAdmin){
                    return <Component {...rest}/>
                }
                else{
                    return <Redirect to={'/no-auth'}/>
                }
            }else {
                return <Component {...rest}/>
            }
        }else{
            return <Redirect to={'/no-auth'}/>
        }
    }
    } />
}

export default ProtectedRoute;