import React from 'react';
import { useTranslation } from 'react-i18next';


const styles = {
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => {
  const { t } = useTranslation();
  return(
    <div style={styles.container}>
      <h1 style={styles.title}>
      {t('homePage.message')}{' '}
        <span role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </span>
      </h1>
    </div>

  )
};

export default HomeView;
