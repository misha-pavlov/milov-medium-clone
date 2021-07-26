import { AppStateType } from '../redux';

export const getUsers = (state: AppStateType) => {
  return state.usersReducer.users;
};

export const getRecentPosts = (state: AppStateType) => {
  return state.postsReducer.posts;
};

export const getSearchPosts = (state: AppStateType) => {
  return state.postsReducer.searchPosts;
};

export const getCurrentPost = (state: AppStateType) => {
  return state.postsReducer.currentPost;
};
