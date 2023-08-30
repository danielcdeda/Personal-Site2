import React, { useState } from 'react';
import './styles.css'


function Header() {
  return (
    <header>
      <h2 className="header_logo">Daniel Déda</h2>
      <nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Portfolio</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
        </ul>
      </nav>
    </header>
  );

}

export default Header;