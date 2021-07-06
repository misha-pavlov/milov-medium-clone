import React from 'react';
import AllTopicsPage from './AllTopicsPage';
import { TMediumMain } from '../MediumMain/MediumMain';

const AllTopicsPageContainer: React.FC<TMediumMain> = ({ isAuth, addLocalStorageItem, removeLocalStorageItem }) => {
  return (
    <AllTopicsPage
      addLocalStorageItem={addLocalStorageItem}
      removeLocalStorageItem={removeLocalStorageItem}
      isAuth={isAuth}
    />
  );
};

export default AllTopicsPageContainer;
