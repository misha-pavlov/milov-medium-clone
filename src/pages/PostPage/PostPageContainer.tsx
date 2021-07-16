import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import PostPage from './PostPage';
import { TMediumMain } from '../MediumMain/MediumMain';
import { getPost, TPosts } from '../../redux/reducers/PostsReducer';
import { AppStateType } from '../../redux/redux';
import { getSearchPosts } from '../../redux/selectors/UsersSelector';
import { useParams } from 'react-router-dom';

type statePropsType = {
  searchPosts: Array<TPosts>;
};

type dispatchPropsType = {
  getPost: (topic: string) => void;
};

type ownPropsType = TMediumMain;

type TPostPageContainer = statePropsType & dispatchPropsType & ownPropsType;

const PostPageContainer: React.FC<TPostPageContainer> = ({
  isAuth,
  removeLocalStorageItem,
  addLocalStorageItem,
  getPost,
  searchPosts,
}) => {
  const params = useParams<{ name: string; id: string }>();
  useEffect(() => {
    (async function getPostFunction() {
      await getPost(params.id);
    })();
  }, [getPost, params.id]);

  return (
    <PostPage
      addLocalStorageItem={addLocalStorageItem}
      removeLocalStorageItem={removeLocalStorageItem}
      isAuth={isAuth}
      searchPosts={searchPosts}
    />
  );
};

const mapStateToProps = (state: AppStateType) => ({
  searchPosts: getSearchPosts(state),
});

export default compose(
  connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, {
    getPost,
  }),
)(PostPageContainer);
