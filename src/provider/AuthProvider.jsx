import React, {createContext, useContext, useState} from "react";


const authContext = createContext();


// AUTH PROVIDER
const fakeAuth ={
    logIn: (logInCallback)=>{
        logInCallback();
    },
    logInAsAdmin: (callback)=>{
        callback()
    },
    logOut: (logOutCallback)=>{
        logOutCallback();
    }
}


//custom Auth hook
const useProviderAuth =()=> {

    const [isAuth, setAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);


    const logIn = (logInCallback)=>{
        //Calls Auth Services to log in

        fakeAuth.logIn(()=>{
            setAuth(true);
            logInCallback();
        })
    }

    const logInAsAdmin = (logInAsAdminCallback)=>{

        fakeAuth.logIn(()=>{
            setAuth(true);
            setIsAdmin(true);
            logInAsAdminCallback(); // WHEN IS ADMIN AUTH
        })

    }

    const logOut = (logOutCallback)=>{

        fakeAuth.logIn(()=>{
            setAuth(false);
            logOutCallback();
        })
    }

    return { isAuth, isAdmin ,logIn, logOut}

}
//HOC
export const ProvideAuth = ({children})=>{
    const auth = useProviderAuth()

    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

//custom hook
export const useAuth =()=> useContext(authContext);