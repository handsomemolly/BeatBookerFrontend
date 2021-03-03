import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = ({ user, handleLogout }) => {
  return (
    <div>
      <div className="nav">
        <header className="topNav">
          <h3 className="navTitle">BeatBooker</h3>
          <ul>
            {!user.id ? (
              <>
                <li>
                  <a href="#" className="nav-link">
                    <NavLink to="/login">Login</NavLink>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    <NavLink to="/signup">Sign up</NavLink>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    <NavLink to="/bookings">My Bookings</NavLink>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    <NavLink to="/home">Home</NavLink>
                  </a>
                </li>
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
          </ul>
        </header>
      </div>
    </div>
  );
};
export default Navbar;
