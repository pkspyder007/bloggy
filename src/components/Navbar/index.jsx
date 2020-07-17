import React from 'react';
import { HomeOutlined, FileDoneOutlined, UserOutlined, UserAddOutlined, UnlockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import './navbar.css';


class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <h2 className="logo">Bloggy</h2>
        <ul className="nav-links">
          <NavLink to="/"><li><HomeOutlined /> Home</li></NavLink>
          <NavLink to="/blog"><li><FileDoneOutlined /> Blog</li></NavLink>
          <NavLink to="/admin"><li><UserOutlined /> Admin</li></NavLink>
          <NavLink to="/login"><li><UnlockOutlined /> Login</li></NavLink>
          <NavLink to="/signup"><li><UserAddOutlined /> Signup</li></NavLink>
        </ul>
      </div>
    );
  }
}

export default Navbar;