import axios from 'axios';
import { TUsers } from '../redux/reducers/UsersReducer';
import { TPosts } from '../redux/reducers/PostsReducer';

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
    const posts = `http://localhost:3000/posts`;
    return axios.get<Array<TPosts>>(posts).then(response => response.data);
  },

  getPostsByName(postName: string) {
    const posts = `http://localhost:3000/posts/post-by-name/${postName}`;
    return axios.get<Array<TPosts>>(posts).then(response => response.data);
  },

  getPostsByTopic(topic: string) {
    const posts = `http://localhost:3000/posts/post-by-topic/${topic}`;
    return axios.get<Array<TPosts>>(posts).then(response => response.data);
  },

  getPostsByPostCreator(postCreator: string) {
    const posts = `http://localhost:3000/posts/post-by-postCreator/${postCreator}`;
    return axios.get<Array<TPosts>>(posts).then(response => response.data);
  },

  createPost(
    name: string,
    image: string,
    topic: string,
    postCreator: string,
    date: string,
    timeToRead: string,
    post: string,
  ) {
    const postCreate = `http://localhost:3000/posts`;
    return axios
      .post(postCreate, { name, image, topic, postCreator, date, timeToRead, post })
      .then(response => response.data);
  },
};
