import { useState, useEffect } from 'react';
import { ThemeContext, themes } from 'context/themeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as storage from 'services/localStorage';
import s from './App.module.css';
import Container from 'components/common/Container/Container';
import Appbar from 'components/AppBar/AppBar';
import Spinner from 'components/common/Spinner/Spinner';
import PhonebookView from 'views/PhonebookView/PhonebookView';
import HomeView from 'views/HomeView';
import NotFoundView from 'views/NotFoundView/NotFoundView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import { Switch, Route } from 'react-router-dom';
import {Suspense } from 'react';

const THEME_STORAGE_KEY = 'theme';

const App = () => {
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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Appbar/>
      <div className={theme === themes.light ? s.lightTheme : s.darkTheme}>
        <Container>
          {/* TODO: удалить Suspense или тут или в index.js */}
          <Suspense fallback={<Spinner />}> 
            <Switch>
              <Route path="/" exact>
                <HomeView />
              </Route>

              <Route exact path="/register">
                <RegisterView/>
              </Route>

              <Route path="/login">
                <LoginView />
              </Route>

              <Route path="/contacts">
                <PhonebookView/>
              </Route>

              <Route>
                <NotFoundView/>
              </Route>
            </Switch>
          </Suspense> 
        </Container>
      </div>
      <ToastContainer autoClose={5000} />
    </ThemeContext.Provider>
  );
};

export default App;
