import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import PostPage from './PostPage';
import { TMediumMain } from '../MediumMain/MediumMain';
import { getPost, TPosts } from '../../redux/reducers/PostsReducer';
import { AppStateType } from '../../redux/redux';
import { getCurrentPost } from '../../redux/selectors/UsersSelector';
import { useParams } from 'react-router-dom';

type statePropsType = {
  currentPost: TPosts | {};
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
  currentPost,
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
      // @ts-ignore
      currentPost={currentPost}
    />
  );
};

const mapStateToProps = (state: AppStateType) => ({
  currentPost: getCurrentPost(state),
});

export default compose(
  connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, {
    getPost,
  }),
)(PostPageContainer);
