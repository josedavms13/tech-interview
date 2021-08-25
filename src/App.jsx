import React, {useEffect, useState} from 'react'
import './App.css'
import authContext from './context/AuthContext'

import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import AuthContext from "./context/AuthContext";
import ProtectedRoute from "./GlobalComponents/ProtectedRoute";
import NavBarComponent from "./GlobalComponents/NavBarComponent";
import WhenNoOuth from "./views/WhenNoOuth";
import LogIn from "./views/logIn";
import {useAuth} from "./provider/AuthProvider";
import AdminPage from "./views/AdminPage";
import {getItemService} from "./services/getItemService";
import Home from "./views/home";
import Shop from "./views/Shop";


function App() {


    const arrayOfItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const {user} = useAuth();

    // Because of interview
    useEffect(()=>{
        console.log(user);

    },[user])


    const [shopItems, setShopItems] = useState(null);
    // WHEN APP LOADS
    useEffect(() => {
        let items;


        items = getItemService();


        setShopItems(items)

        console.log(shopItems);

    }, []);



    return (
        <div className="App">

            <NavBarComponent/>

            <AuthContext.Provider value={{isAuth: true}}>
                <Router>
                    <Switch>

                        <Route path={'/shop'} component={Shop}>
                            {<ProtectedRoute component={Shop} needAdmin={false} items={shopItems}/>}
                        </Route>

                        <Route path={'/admin-page'}>
                            <ProtectedRoute component={AdminPage} needAdmin={true}/>
                        </Route>

                        <Route path={'/no-auth'}>
                            <WhenNoOuth/>
                        </Route>

                        <Route path={'/log-in'}>
                            <LogIn/>
                        </Route>

                        <Route path={'/home'}>
                            <Home />
                        </Route>

                        <Route path={'/'}>
                            <Redirect to={'/home'} />
                        </Route>

                    </Switch>
                </Router>

            </AuthContext.Provider>

        </div>
    )
}

export default App
