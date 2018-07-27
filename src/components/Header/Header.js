import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


export const Header = () => {
  return ( 
    <div className='header'>
      <h1 className='main-title'> WildFire USA </h1>
      <NavLink exact to="/">Current Fires</NavLink>
      <NavLink exact to = "/reportFires" > Report a Fire </NavLink>
    </div>
  )
}
export default Header;