import React from 'react';
import { useLocation } from 'react-router-dom';
import TopicPage from './TopicPage';
import { TMediumMain } from '../MediumMain/MediumMain';

const TopicPageContainer: React.FC<TMediumMain> = ({ isAuth, removeLocalStorageItem, addLocalStorageItem }) => {
  const location = useLocation();
  const profile = 'profile';

  return (
    <TopicPage
      addLocalStorageItem={addLocalStorageItem}
      removeLocalStorageItem={removeLocalStorageItem}
      isAuth={isAuth}
      isProfilePage={location.pathname.includes(profile)}
    />
  );
};

export default TopicPageContainer;
