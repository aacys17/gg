import React from 'react';
import { Nav, NavLink, Bars, NavMenu, Button } from './navelements.js';
import { useHistory } from 'react-router-dom';

export const NavBar = () => {
  const history = useHistory();
  const handlelogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('refreshtoken');
    history.push('/login');
  };
  const handleProfile = () => {
    history.push('/myprofile');
  }

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/dashboard">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/wishlist">Wishlist</NavLink>
          <NavLink to="/notes">Notes</NavLink>
           <Button onClick={handleProfile}>My Profile</Button>
          <Button onClick={handlelogout}>Logout</Button>
        </NavMenu>
      </Nav>
    </>
  );
};
