import React from 'react';
import OurStoryPage from './OurStoryPage';
import { TMediumMain } from '../MediumMain/MediumMain';

const OurStoryPageContainer: React.FC<TMediumMain> = ({ isAuth, removeLocalStorageItem, addLocalStorageItem }) => {
  return (
    <OurStoryPage
      addLocalStorageItem={addLocalStorageItem}
      removeLocalStorageItem={removeLocalStorageItem}
      isAuth={isAuth}
    />
  );
};

export default OurStoryPageContainer;
