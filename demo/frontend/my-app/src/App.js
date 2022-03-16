import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./auth/login/login";
import Register from "./auth/register/register";
import SingleBoard from './components/Board/SingleBoard';
import Dashboard from './components/Dashboard/dashboard';
import About from './components/Navbar/about';
import MyProfile from './components/Navbar/myprofile';
import Notes from './components/Navbar/notes';
import UpdateProfile from './components/Update/updateprofile';
import Wishlist from './components/Navbar/wishlist';
import Createwishlist from './components/Navbar/createwishlist';
import ChangePassword from './components/Update/changepassword';
import ChangeEmail from './components/Update/changeemail';
import ChangeUsername from './components/Update/changeusername';

function App() {
  return (
    <Router>
      <Switch>
         <Route exact path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/singleboard/:id">
          <SingleBoard />
        </Route>
         <Route path="/about">
          <About />
        </Route>
         <Route path="/myprofile">
          <MyProfile />
        </Route>
         <Route path="/notes">
          <Notes />
        </Route>
          <Route path="/updateprofile">
          <UpdateProfile />
        </Route>
         <Route path="/wishlist">
          <Wishlist />
        </Route>
         <Route path="/createwishlist">
          <Createwishlist />
        </Route>
         <Route path="/changepassword">
          <ChangePassword />
        </Route>
        <Route path="/changeemail">
          <ChangeEmail />
        </Route>
        <Route path="/changeusername">
          <ChangeUsername />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

