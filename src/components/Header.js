import React from 'react';
import logo from '../imgs/header_logo.png';
import '../styles/Header.css';
import { withRouter, Link } from 'react-router-dom';

function Header(props) {
  const { pathname } = props.location;
  return (
    <header className="Header" style={pathname === '/' ? {display: 'none'} : null}>
      <div className="content">
        <Link to="/filter"><img src={logo} height="28px" alt="Houser"/></Link>
        <span>Houser Dashboard</span>
        <Link to="/"><span className="logout">Log Out</span></Link>
      </div>
    </header>
  )
}

export default withRouter(Header);