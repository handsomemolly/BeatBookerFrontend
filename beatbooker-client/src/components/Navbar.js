import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = ({ user, handleLogout }) => {
  return (
    <header>
      <h3>BeatBooker - The Crowd is Waiting</h3>
      <h4>
        {!user.id ? (
          <>
            <p>
              <NavLink to="/login">Login</NavLink>
            </p>
            <p>
              <NavLink to="/signup">Sign up</NavLink>
            </p>
          </>
        ) : (
          <>
            <p>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </p>
            <p>
              <NavLink to="/users">Users</NavLink>
            </p>
            <p>
              <button onClick={handleLogout}>Logout</button>
            </p>
          </>
        )}
      </h4>
    </header>
  );
};
export default Navbar;
