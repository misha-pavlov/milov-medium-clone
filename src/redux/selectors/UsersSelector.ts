import { AppStateType } from '../redux';

export const getUsers = (state: AppStateType) => {
  return state.usersReducer.users;
};
