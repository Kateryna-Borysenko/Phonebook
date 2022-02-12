import React from 'react';
import { NavLink } from 'react-router-dom';
import {HiOutlineLogin} from 'react-icons/hi';
import { useTranslation } from 'react-i18next';


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



const AuthNav = () => {
  const { t } = useTranslation();

  return (
    <div style={styles.wrap}>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        {t('header.registerLink')}
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

export default AuthNav;