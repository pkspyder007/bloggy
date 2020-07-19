import React from "react";
import { NavLink,Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <label className="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
        <i className="fa fa-bars"></i>
      </label>
      <Link to="/" className="logo">
        Bloggy
      </Link>
      <input type="checkbox" id="chkToggle"></input>
      <ul className="main-nav" id="js-menu">
        <li>
          <NavLink to="/" className="nav-links">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-links">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="nav-links">
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-links">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// <div classNameName="nav">
//   <h2 classNameName="logo">Bloggy</h2>
//   <ul classNameName="nav-links">
//     <NavLink to="/"><li><HomeOutlined /> Home</li></NavLink>
//     <NavLink to="/blog"><li><FileDoneOutlined /> Blog</li></NavLink>
//     <NavLink to="/admin"><li><UserOutlined /> Admin</li></NavLink>
//     <NavLink to="/login"><li><UnlockOutlined /> Login</li></NavLink>
//     <NavLink to="/signup"><li><UserAddOutlined /> Signup</li></NavLink>
//   </ul>
// </div>
export default Navbar;
