import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = ({ user, handleLogout }) => {
  return (
    <header className="topNav">
      <h3 className="navTitle">BeatBooker</h3>
      <h4>
        {!user.id ? (
          <>
            <p>
              <NavLink to="/login">Login</NavLink>
            </p>
            <p>
              <NavLink to="/signup">Sign up</NavLink>
            </p>
            <p>
              <NavLink to="/bookings">My Bookings</NavLink>
            </p>
            <p>
              <NavLink to="/home">Home</NavLink>
            </p>
          </>
        ) : (
          <>
            <p>
              <NavLink to="/home" exact>
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
