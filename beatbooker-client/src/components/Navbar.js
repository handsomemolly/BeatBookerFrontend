import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = ({ user, handleLogout }) => {
  return (
    <div>
      <div className="nav">
        <header className="topNav">
          <ul>
            {!user.id ? (
              <>
                <li>BeatBooker</li>
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
                {/* <li>
                  <a href="#" className="nav-link">
                    <NavLink to="/bookings">My Bookings</NavLink>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    <NavLink to="/home">Home</NavLink>
                  </a>
                </li> */}
              </>
            ) : (
              <>
                <li>Beat Booker</li>
                <li>
                  <a href="#" className="nav-link">
                    <NavLink to="/home">Home</NavLink>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    <NavLink to="/bookings">My Bookings</NavLink>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    <button onClick={handleLogout}>Logout</button>
                  </a>
                </li>
              </>
            )}
          </ul>
        </header>
      </div>
    </div>
  );
};
export default Navbar;
