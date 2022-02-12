import Navigation from 'components/Navigation/Navigation';
import s from './Appbar.module.css';
import LanguageSwitcher from 'components/common/LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from 'components/common/ThemeSwitcher/ThemeSwitcher';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { authSelectors} from 'redux/auth';
import { useSelector} from 'react-redux';

const Appbar = () => {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn); 
  return (
    <header className={s.header}>
      <div className={s.headerTop}>
        <Navigation/>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>

      <div className={s.headerBottom}>
        <div className={s.lanquagesWrapper}>
          <LanguageSwitcher />
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
export default Appbar;