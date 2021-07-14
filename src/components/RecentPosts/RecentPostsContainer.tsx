import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import RecentPosts from './RecentPosts';
import { getRecentPostsList, TPosts } from '../../redux/reducers/PostsReducer';
import { AppStateType } from '../../redux/redux';
import { getRecentPosts } from '../../redux/selectors/UsersSelector';

type statePropsType = {
  posts: Array<TPosts>;
};

type dispatchPropsType = {
  getRecentPostsList: () => void;
};

type ownPropsType = {};

type TRecentPostsContainer = statePropsType & dispatchPropsType & ownPropsType;

const RecentPostsContainer: React.FC<TRecentPostsContainer> = ({ posts, getRecentPostsList }) => {
  useEffect(() => {
    (async function getRecentPostsListFunction() {
      await getRecentPostsList();
    })();
  }, [getRecentPostsList]);

  return <RecentPosts posts={posts} />;
};

const mapStateToProps = (state: AppStateType) => ({
  posts: getRecentPosts(state),
});

export default compose(
  connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, { getRecentPostsList }),
)(RecentPostsContainer);
