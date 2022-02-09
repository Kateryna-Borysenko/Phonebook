import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { ThemeContext, themes } from 'context/themeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useTranslation } from 'react-i18next';
import * as storage from 'services/localStorage';
// import image from 'images/image.jpg';
import s from './App.module.css';
// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
import Container from 'components/common/Container/Container';


// import { contactsSelectors } from 'redux/contacts';
import Appbar from 'components/AppBar/AppBar';
import PhonebookView from 'views/PhonebookView/PhonebookView';
import HomeView from 'views/HomeView';
// import LoginView from 'views/LoginView';

const THEME_STORAGE_KEY = 'theme';

const App = () => {
  // const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  // const contacts = useSelector(contactsSelectors.getContacts);

  const [theme, setTheme] = useState(
    () => storage.get(THEME_STORAGE_KEY) ?? themes.light,
  );

  const toggleTheme = () =>
    setTheme(prevTheme =>
      prevTheme === themes.light ? themes.dark : themes.light,
    );

  useEffect(() => {
    storage.save(THEME_STORAGE_KEY, theme);
  }, [theme]);

  // const { t } = useTranslation();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Appbar/>
      <div className={theme === themes.light ? s.lightTheme : s.darkTheme}>
        <Container>
          {/* <PhonebookView/> */}
          {/* <HomeView/> */}
          {/* <LoginView/> */}

        </Container>
      </div>
      <ToastContainer autoClose={5000} />
    </ThemeContext.Provider>
  );
};

export default App;
