import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.jpg';
import {HiOutlineLogout} from 'react-icons/hi';

const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 20
  
  },
  avatar: {
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    color: '#2f2b2b',
    fontWeight: 500,
    marginRight: 12,
  },
  logOutIcon:{
    fontSize: 25,
    color:'#fff',
    border:'none',
    backgroundColor: 'transparent',
    cursor: 'pointer'
  }
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div style={styles.wrap}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>{name}</span>
      <button type="button" style={styles.logOutIcon} onClick={() => dispatch(authOperations.logOut())}>
        <HiOutlineLogout/>
      </button>
    </div>
  );
}
