import Navigation from 'components/common/Navigation/Navigation';
import s from './Appbar.module.css';
import LanguageSwitcher from 'components/common/LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from 'components/common/ThemeSwitcher/ThemeSwitcher';

export default function Appbar() {
  return (
    <header className={s.header}>
      <Navigation />
      <div className={s.headerBottom}>
        <div className={s.lanquagesWrapper}>
          <LanguageSwitcher />
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
