import React from 'react';
import { Redirect } from 'react-router-dom';

import CreatePost from './CreatePost';
import { TMediumMain } from '../MediumMain/MediumMain';
import { constants } from '../../config/constants';
import { createPost } from '../../redux/reducers/PostsReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux';

type statePropsType = {};

type dispatchPropsType = {
  createPost: (
    name: string,
    image: string,
    topic: string,
    postCreator: string,
    date: string,
    timeToRead: string,
    post: string,
  ) => void;
};

type ownPropsType = TMediumMain;

type TCreatePostContainer = statePropsType & dispatchPropsType & ownPropsType;

const CreatePostContainer: React.FC<TCreatePostContainer> = ({
  isAuth,
  removeLocalStorageItem,
  addLocalStorageItem,
  createPost,
}) => {
  return isAuth ? (
    <CreatePost
      isAuth={isAuth}
      removeLocalStorageItem={removeLocalStorageItem}
      addLocalStorageItem={addLocalStorageItem}
      createPost={createPost}
    />
  ) : (
    <Redirect to={constants.urls.medium} />
  );
};

const mapStateToProps = () => ({});

export default compose(
  connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, { createPost }),
)(CreatePostContainer);
