import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import TopicPage from './TopicPage';
import { postCreatorPostsList, topicPostsList, TPosts } from '../../redux/reducers/PostsReducer';
import { AppStateType } from '../../redux/redux';
import { getSearchPosts } from '../../redux/selectors/UsersSelector';

type statePropsType = {
  searchPosts: Array<TPosts>;
};

type dispatchPropsType = {
  topicPostsList: (topic: string) => void;
  postCreatorPostsList: (postCreator: string) => void;
};

type ownPropsType = {
  isAuth: boolean;
  removeLocalStorageItem?: () => void;
  addLocalStorageItem?: (params: string) => void;
};

type TSearchPostsContainer = statePropsType & dispatchPropsType & ownPropsType;

const TopicPageContainer: React.FC<TSearchPostsContainer> = ({
  searchPosts,
  topicPostsList,
  isAuth,
  removeLocalStorageItem,
  addLocalStorageItem,
  postCreatorPostsList,
}) => {
  const location = useLocation();
  const params = useParams<{ name?: string; ukr?: string; postCreator?: string }>();
  const profile = 'profile';

  useEffect(() => {
    (async function getPostsListFunction() {
      if (params.name != null) {
        await topicPostsList(params.name);
      }
    })();
  }, [topicPostsList, params.name]);

  useEffect(() => {
    (async function getPostsListFunction() {
      if (params.postCreator != null) {
        await postCreatorPostsList(params.postCreator);
      }
    })();
  }, [postCreatorPostsList, params.postCreator]);

  return (
    <TopicPage
      ukr={params.ukr}
      postCreator={params.postCreator}
      searchPosts={searchPosts}
      addLocalStorageItem={addLocalStorageItem}
      removeLocalStorageItem={removeLocalStorageItem}
      isAuth={isAuth}
      isProfilePage={location.pathname.includes(profile)}
    />
  );
};

const mapStateToProps = (state: AppStateType) => ({
  searchPosts: getSearchPosts(state),
});

export default compose(
  connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, {
    topicPostsList,
    postCreatorPostsList,
  }),
)(TopicPageContainer);
