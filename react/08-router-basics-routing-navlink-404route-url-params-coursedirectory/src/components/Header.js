import React from 'react';
import { NavLink } from 'react-router-dom';   // Use NavLink (instead of the simpler Link) to highlight the current section in the nav menu -> it gives them a class "active" which can be styled in CSS

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      {/* Use Router's Link/NavLink tags instead of regular anchor tags (and change href -> to) to add active classes for styling: */}
      <li><NavLink to="/" end>Home</NavLink></li>  {/* Use end instead of exact in NavLinks to exactly match path*/}
      <li><NavLink to="/about">About</NavLink></li>
      {/* <li><NavLink to="/teachers">Teachers</NavLink></li> */}
      <li><NavLink to="/teachers-featured">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>    
  </header>
);

// If you want to change default "active" classname (for styling),
// before (v4/5) you'd pass the prop activeClassName="myActiveClassName".
// Now (v6), pass a function to the className prop: 
/*
className={({ isActive }) =>
  isActive ? "myActiveClassName" : undefined
}
// You can also override a style by passing a function to the style prop:
/*
style={({ isActive }) =>
  isActive ? "myActiveStyle" : undefined
}
// In v4/5, this was done by passing the prop activeStyle={ {backgroud: 'tomato"} }

*/

export default Header;