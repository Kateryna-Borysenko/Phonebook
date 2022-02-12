import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return(

  <nav className={s.container}>
    
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink exact to="/contacts" className={s.link} activeClassName={s.activeLink}>
        Контакты
        </NavLink>
      )}

  </nav>
  )
  
  };


export default Navigation;
