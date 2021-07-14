import { AppStateType } from '../redux';

export const getUsers = (state: AppStateType) => {
  return state.usersReducer.users;
};

export const getRecentPosts = (state: AppStateType) => {
  return state.postsReducer.posts;
};
