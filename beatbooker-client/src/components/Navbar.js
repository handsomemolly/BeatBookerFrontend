import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = ({ user, handleLogout }) => {
  return (
    <header>
      <h3>BeatBooker - The Crowd is Waiting</h3>
      <ul>
        {!user.id ? (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign up</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};
export default Navbar;
