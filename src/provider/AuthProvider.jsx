import React, {createContext, useContext, useState} from "react";


const authContext = createContext();


// AUTH PROVIDER
const fakeAuth ={
    logIn: (logInCallback)=>{
        logInCallback();
    },
    logOut: (logOutCallback)=>{
        logOutCallback();
    }
}


//custom Auth hook
const useProviderAuth =()=> {

    const [isAuth, setAuth] = useState(false);


    const logIn = (logInCallback)=>{
        //Calls Auth Services to log in

        fakeAuth.logIn(()=>{
            setAuth(true);
            logInCallback();
        })
    }
    const logOut = (logOutCallback)=>{

        fakeAuth.logIn(()=>{
            setAuth(false);
            logOutCallback();
        })
    }

    return { isAuth ,logIn, logOut}

}
//HOC
export const ProvideAuth = ({children})=>{
    const auth = useProviderAuth()

    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

//custom hook
export const useAuth =()=> useContext(authContext);