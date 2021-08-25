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

    const [user, setUser] = useState({
        name : '',
        isAdmin : false,
        isAuth : false,
    });


    const logIn = (name, logInCallback)=>{
        //Calls Auth Services to log in

        fakeAuth.logIn(()=>{
            setUser({
                ...user,
                name: name,
                isAuth: true,
                isAdmin: false,
            })
            logInCallback();
        })
    }

    const logInAsAdmin = (name, logInAsAdminCallback)=>{

        fakeAuth.logIn(()=>{

            setUser({
                ...user,
                name: name,
                isAuth: true,
                isAdmin: true,
            })

            logInAsAdminCallback(); // WHEN IS ADMIN AUTH
        })

    }

    const logOut = (logOutCallback)=>{

        fakeAuth.logIn(()=>{
            setUser({
                ...user,
                name: '',
                isAuth: false,
                isAdmin: false,
            })
            logOutCallback();
        })
    }

    return { user, logInAsAdmin ,logIn, logOut}

}
//HOC
export const ProvideAuth = ({children})=>{
    const auth = useProviderAuth()

    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

//custom hook
export const useAuth =()=> useContext(authContext);