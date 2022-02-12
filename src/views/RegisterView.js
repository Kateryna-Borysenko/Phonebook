import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { useTranslation } from 'react-i18next';


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
    fontWeight: 200,
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
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { t } = useTranslation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  // const isBtnDisabled = !name || !email || !password;
  return (
    <div style={styles.wrap}>
      <h1 style={styles.title}>{t('logUpForm.title')}</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
        {t('logUpForm.name')}
          <input 
          style={styles.textField}
          type="text" 
          name="name" 
          value={name} 
          onChange={handleChange} 
          placeholder={t('logUpForm.placeholderName')}
          required
          />
        </label>

        <label style={styles.label}>
        {t('logUpForm.emaileTitle')}
          <input
            style={styles.textField}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder={t('logUpForm.emailePlaceholder')}
            required
          />
        </label>

        <label style={styles.label}>
        {t('logUpForm.passwordTitle')}
          <input
            style={styles.textField}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder={t('logUpForm.passwordPlaceholder')}
            required
          />
        </label>

        <button  style={styles.button} type="submit">{t('logUpForm.button')}</button>
      </form>
    </div>
  );
}
