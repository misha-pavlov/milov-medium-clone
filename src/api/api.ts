import axios from 'axios';
import { TUsers } from '../redux/reducers/UsersReducer';

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
    return axios
      .post(user, { userName, password, twitter, gitHub, linkedin, facebook, instagram, photo })
      .then(response => response.data);
  },
};

export const postAPI = {
  getPosts() {
    const posts = `http://lolhost:3000/posts`;
    return axios.get<Array<any>>(posts).then(response => response.data);
  },
};
