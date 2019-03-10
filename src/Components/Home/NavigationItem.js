import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = () => {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/profile">Your Profile</NavLink>
      <NavLink to="/logout">Log Out</NavLink>
    </div>
  );
};
export default NavigationItem;
