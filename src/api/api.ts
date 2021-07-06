import axios from 'axios';
import { TUsers } from '../redux/reducers/UsersReducer';

export type TUser = {
  userName: string;
  password: string;
  twitter?: string;
  gitHub?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  photo?: string;
};

export const userAPI = {
  getUsers() {
    const users = `http://localhost:3000/users`;
    return axios.get<Array<TUsers>>(users).then(response => response.data);
  },
  signUpUser(
    userName: string,
    password: string,
    twitter?: string,
    gitHub?: string,
    linkedin?: string,
    facebook?: string,
    instagram?: string,
    photo?: string,
  ) {
    const user = `http://localhost:3000/users`;
  },
};
