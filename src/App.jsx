import React, { useState } from 'react'
import './App.css'
import authContext from './context/AuthContext'

import { HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import AuthContext from "./context/AuthContext";
import ProtectedRoute from "./GlobalComponents/ProtectedRoute";
import ViewToProtect from "./views/ViewToProtect";
import NavBarComponent from "./GlobalComponents/NavBarComponent";
import TableRender from "./views/TableRender";
import WhenNoOuth from "./views/WhenNoOuth";
import LogIn from "./views/logIn";
import {useAuth , ProvideAuth} from "./provider/AuthProvider";




function App() {

    const auth = useAuth();

  const arrayOfItems = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="App">

        <NavBarComponent />

      <AuthContext.Provider  value={{isAuth: true}}>
        <Router>
          <Switch>

            <Route path={'/protected'}>
              <ProtectedRoute component={ViewToProtect} hi={12}/>
            </Route>

              <Route path={'/table'}>
              <TableRender toRender={arrayOfItems}/>
              </Route>
            <Route path={'/no-auth'}>
                <WhenNoOuth />
            </Route>

              <Route path={'/log-in'}>
                  <LogIn />
              </Route>

          </Switch>
        </Router>

      </AuthContext.Provider>

    </div>
  )
}

export default App
