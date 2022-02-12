import { useState, useEffect,lazy, Suspense } from 'react';
import { ThemeContext, themes } from 'context/themeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as storage from 'services/localStorage';
import s from './App.module.css';
import Container from 'components/common/Container/Container';
import Appbar from 'components/AppBar/AppBar';
import Spinner from 'components/common/Spinner/Spinner';
import { Switch} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomeView = lazy(() => import('../../views/HomeView'));
const RegisterView = lazy(() => import('../../views/RegisterView'));
const LoginView = lazy(() => import('../../views/LoginView'));
const UploadView = lazy(() => import('../../views/UploadView'));
const PhonebookView = lazy(() => import('../../views/PhonebookView/PhonebookView'));
const NotFoundView = lazy(() => import('../../views/NotFoundView/NotFoundView'));

const THEME_STORAGE_KEY = 'theme';

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  // console.log('isFetchingCurrentUser', isFetchingCurrentUser);

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

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {isFetchingCurrentUser ?(<h1 className={s.skeleton}>Показываем React Skeleton</h1>):(
        <>
          <Appbar/>
          <div className={theme === themes.light ? s.lightTheme : s.darkTheme}>
            <Container>
              <Suspense fallback={<Spinner />}> 
                <Switch>
                  <PublicRoute exact path="/" >
                    <HomeView />
                  </PublicRoute>
    
                  <PublicRoute exact path="/register" restricted>
                    <RegisterView/>
                  </PublicRoute>
    
                  <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
                    <LoginView />
                  </PublicRoute>
    
                  <PrivateRoute path="/contacts" redirectTo="/login">
                    <PhonebookView/>
                  </PrivateRoute>
    
                  <PrivateRoute path="/upload" redirectTo="/login">
                    <UploadView />
                  </PrivateRoute>
    
                  <PublicRoute>
                    <NotFoundView/>
                  </PublicRoute>
                </Switch>
              </Suspense> 
            </Container>
          </div>
        </>

      )}
      <ToastContainer autoClose={5000} />
    </ThemeContext.Provider>
  );
};

export default App;
