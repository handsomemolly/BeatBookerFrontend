import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo.png";
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
              </>
            ) : (
              <>
                <li>
                  <div>BeatBooker</div>
                </li>
                <li>
                  {/* <a href="#" className="nav-link"> */}
                  <NavLink to="/home">Home</NavLink>
                  {/* </a> */}
                </li>
                <li>
                  <a href="#" className="nav-link">
                    <NavLink to="/bookings" userId={user.id}>
                      My Bookings
                    </NavLink>
                  </a>
                </li>
                <li>
                  <button className="logout" onClick={handleLogout}>
                    Logout
                  </button>
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
