import React from 'react';
import PostPage from './PostPage';
import { TMediumMain } from '../MediumMain/MediumMain';

const PostPageContainer: React.FC<TMediumMain> = ({ isAuth, removeLocalStorageItem, addLocalStorageItem }) => {
  return (
    <PostPage
      addLocalStorageItem={addLocalStorageItem}
      removeLocalStorageItem={removeLocalStorageItem}
      isAuth={isAuth}
    />
  );
};

export default PostPageContainer;
