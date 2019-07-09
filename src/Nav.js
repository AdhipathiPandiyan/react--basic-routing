import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav(){

    const navStyle = {
        color : 'white'
        }

  return (
    <div className="nav">
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/shop" style={navStyle}>
                <li>Shop</li>
            </Link>
        </ul>
    </div>
  );
}

export default Nav;
