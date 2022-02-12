import { useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { authOperations, authSelectors  } from '../redux/auth';
import { toast } from 'react-toastify';

const styles = {
  wrap:{
    margin: '0 auto'
  },
  title:{
    fontFamily: 'inherit'
  },
  form: {
    width: 400,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },
  textField :{
    marginTop: '10px',
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    fontSize: '20px',
    fontWeight: 250,
    backgroundColor: 'inherit',
    borderRadius: '5px',
    border: '2px solid #007188',
    cursor: 'pointer',
    boxShadow: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 14%)'
  },
  button: {
    marginTop: '20px',
    width: '200px',
    height: '50px',
    fontSize: '16px',
    lineHeight: '26px',
    color: '#fff',
    backgroundColor: '#007188',
    borderRadius: '5px',
    border: 'inherit',
    boxSizing: 'border-box',
    cursor: 'pointer',
    boxShadow: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 14%)'
  },
  disabled:{
    marginTop: '20px',
    width: '200px',
    height: '50px',
    fontSize: '16px',
    lineHeight: '26px',
    color: '#fff',
    backgroundColor: '#c1c1c1',
    borderRadius: '5px',
    border: 'inherit',
    boxSizing: 'border-box',
    boxShadow: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 14%)',
    cursor:'not-allowed', 
  }
  
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
  return (
    <div style={styles.wrap}>
  
      <h1 style={styles.title}>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта*
          <input
          style={styles.textField}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email@mail.com"
            required
          />
        </label>

        <label style={styles.label}>
          Пароль*
          <input
            style={styles.textField}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="qwerty1234"
            required
          />
        </label>

        <button style={isBtnDisabled ? styles.disabled : styles.button}  disabled={isBtnDisabled} type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginView ;