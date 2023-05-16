import React from 'react';
import { Link } from 'react-router-dom';
import { RiHome2Line, RiUserLine, RiMailLine, RiAddLine, RiLogoutBoxLine } from 'react-icons/ri';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>My Blog</h1>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link to="/Home">
              <RiHome2Line /> Home
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/AboutUs">
              <RiUserLine /> About
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/contact">
              <RiMailLine /> Contact
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/Addblogs">
              <RiAddLine /> Create Blog
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/">
              <RiLogoutBoxLine /> Sign Out
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 0,
  margin: 0,
};

const liStyle = {
  margin: '0 1rem',
};

export default Header;
