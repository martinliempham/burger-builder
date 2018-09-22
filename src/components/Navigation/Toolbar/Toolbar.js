import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <Logo />
    <NavigationItems />
  </header>
);

export default toolbar;