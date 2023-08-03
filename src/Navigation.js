// Navigation.js

import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <div>
        
    <nav className="navigation">
    <div>
        <h1 className="logo">Binstagram</h1>
        </div>
      <ul>
        <li>
          <i className="fas fa-home"></i>
          <a href="#home">Home</a>
        </li>
        <li>
          <i className="fas fa-user-friends"></i>
          <a href="#friends">Friends</a>
        </li>
        <li>
          <i className="fas fa-user"></i>
          <a href="#friends">Account</a>
        </li>
        <li>
          <i className="fas fa-info-circle"></i>
          <a href="#about">About</a>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navigation;
