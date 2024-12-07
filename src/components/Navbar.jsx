import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../store/authContext'; // Adjust path based on your folder structure

const NavItem = ({ to, children }) => (
  <li>
    <NavLink to={to} className="nav-link" activeClassName="active">
      {children}
    </NavLink>
  </li>
);

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className="navbar">
      <nav>
        <ul className="nav-list">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/categories">Categories</NavItem>
          <NavItem to="/search">Search</NavItem>
          {isAuthenticated && <NavItem to="/profile">Profile</NavItem>}
          {!isAuthenticated && (
            <>
              <NavItem to="/signin">Sign In</NavItem>
              <NavItem to="/signup">Sign Up</NavItem>
            </>
          )}
          {isAuthenticated && (
            <li>
              <button onClick={logout} className="nav-link logout-btn">
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
  