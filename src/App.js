import React, { createContext, useState } from 'react';import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/Register/Register';
import NotMatch from './components/NotMatch/NotMatch';
import Admin from './components/Admin/Admin';
import RegisterList from './components/RegisterList/RegisterList';
import LoginUser from './components/LoginUser/LoginUser';
import AdminLogin from './components/AdminLogin/AdminLogin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignUpUser from './components/signUpUser/SignUpUser';
import Profile from './components/Profile/Profile';



export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [works, setWorks] = useState({});
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser, works, setWorks}}>
    <p>Name: {loggedInUser.name}</p>
    <Router>
      <Switch>
      
        <Route path="/home"><Header/><Home/></Route>
        
        <Route path="/admin"><Admin/></Route>
        <Route path="/registerList"><RegisterList/> </Route>
        <Route path="/loginUser"> <Header/><LoginUser/> </Route>
        <PrivateRoute path="/register"><Header/> <Register/> </PrivateRoute>
        <Route path="/adminLogin"><Header/> <AdminLogin/> </Route>
        <Route path="/admin"> <Admin/> </Route>
        <Route path="/signUpUser"><Header/> <SignUpUser/> </Route>
        <Route path="/profile"><Header/> <Profile/> </Route>
        <Route path="/"><Header/><Home/></Route>
        <Route path="*"><NotMatch/></Route>
        
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
