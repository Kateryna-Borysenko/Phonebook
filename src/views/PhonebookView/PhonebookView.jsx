import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import image from 'images/image.jpg';
import { contactsSelectors } from 'redux/contacts';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import s from './PhonebookView.module.css';


const Phonebook = () => {
    const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
    const contacts = useSelector(contactsSelectors.getContacts);
  
    const { t } = useTranslation();
  
    return (
        <>
            <img className={s.image} src={image} alt="Woman" />
            <div className={s.contantWrap}>
                <h1 className={s.title}>{t('app.title')}</h1>
                <div className={s.wrap}>
                <ContactForm />
                </div>
                <h2 className={s.subtitle}>{t('app.subtitle') } {filteredContacts.length !== 0  && `${filteredContacts.length}`}</h2>
                {contacts.length > 1 && <Filter />}
                {!contacts.length && <span>{t('app.message')}</span>}
                <ContactList />
            </div>
        </> 
    );
  };
  
  export default Phonebook ;