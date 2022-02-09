import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.container}>

    <div>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>
    </div>

    <div>
      {/* <NavLink to="/contacts " className={s.link} activeClassName={s.activeLink}>
      Contacts
      </NavLink> */}
      <NavLink to="/login " className={s.link} activeClassName={s.activeLink}>
        Sing In
      </NavLink>  
      <NavLink to="/register " className={s.link} activeClassName={s.activeLink}>
        Sing Up
      </NavLink>
      {/* <NavLink to="/logout " className={s.link} activeClassName={s.activeLink}>
        Sing Up
      </NavLink> */}
    </div>

  </nav>
);

export default Navigation;
