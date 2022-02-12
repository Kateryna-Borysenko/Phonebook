import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { t } = useTranslation();

  return(

  <nav className={s.container}>
    
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      {t('header.homeLink')}
      </NavLink>

      {isLoggedIn && (
        <NavLink exact to="/contacts" className={s.link} activeClassName={s.activeLink}>
        {t('header.contactsLink')}
        </NavLink>
      )}

  </nav>
  )
  
  };


export default Navigation;
