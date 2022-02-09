import { useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { authOperations, authSelectors  } from '../redux/auth';
import { toast } from 'react-toastify';

const styles = {
  title:{
    textAlign: 'center',
  },
  container: {
    margin:" 0 auto",
    backgroundColor: '#FFF'
  },
  form: {
   
    width: 420,
    outline: "2px solid pink"
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    // marginBottom: 15,
  },
};
const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const error = useSelector(authSelectors.getError);
  // const loading = useSelector(authSelectors.getLoading);

  //   useEffect(() => {
  //   if (!error) return;
  //   toast.error(error);
  // }, [error]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  const isBtnDisabled = !email || !password;
  // const isBtnDisabled = loading || !email || !password;
  return (
    <div style={styles.container}>
  
      <h1 style={styles.title}>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email@mail.com"
            required
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="qwerty1234"
            required
          />
        </label>

        <button disabled={isBtnDisabled} type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginView ;