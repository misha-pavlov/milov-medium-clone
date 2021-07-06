import React from 'react';
import MediumMain, { TMediumMain } from './MediumMain';

const MediumMainContainer: React.FC<TMediumMain> = ({ isAuth, removeLocalStorageItem, addLocalStorageItem }) => {
  return (
    <MediumMain
      addLocalStorageItem={addLocalStorageItem}
      removeLocalStorageItem={removeLocalStorageItem}
      isAuth={isAuth}
    />
  );
};

export default MediumMainContainer;
