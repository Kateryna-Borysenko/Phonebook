import React from 'react';
import { NavLink } from 'react-router-dom';
import {HiOutlineLogin} from 'react-icons/hi';

const styles = {
  wrap:{
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    color: '#ffeef2',
    fontSize: '20px', 
    fontWeight: 600,
    padding: '0 10px 10px'
  },
  activeLink: {
    color: '#2f2b2b',
  },
  logInIcon:{
    fontSize: 25,
  }
};



export default function AuthNav() {
  return (
    <div style={styles.wrap}>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <HiOutlineLogin style={styles.logInIcon}/>
      </NavLink>
    </div>
  );
}
