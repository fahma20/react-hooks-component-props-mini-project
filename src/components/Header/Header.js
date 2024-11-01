import React from 'react';
import styles from './Header.module.css'; // Assuming you're using CSS modules

const Header = ({ name }) => (
  <header>
    <h1>{name}</h1>
  </header>
);

export default Header;
