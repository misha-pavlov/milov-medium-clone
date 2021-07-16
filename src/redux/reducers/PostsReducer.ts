import { AppStateType, InferActionsTypes } from '../redux';
import { ThunkAction } from 'redux-thunk';

import { postAPI } from '../../api/api';
import { constants } from '../../config/constants';

export type TPosts = {
  _id: string;
  name: string;
  image: string;
  topic: string;
  postCreator: string;
  date: string;
  timeToRead: string;
  post: string;
  __v: number;
};

const initialState: initialStateType = {
  posts: [],
  searchPosts: [],
};

const PostsReducer = (state = initialState, action: ActionsTypesPosts): initialStateType => {
  switch (action.type) {
    case constants.reducers.SET_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            // @ts-ignore
            _id: action._id,
            // @ts-ignore
            name: action.name,
            // @ts-ignore
            image: action.image,
            // @ts-ignore
            topic: action.topic,
            // @ts-ignore
            postCreator: action.postCreator,
            // @ts-ignore
            date: action.date,
            // @ts-ignore
            timeToRead: action.timeToRead,
            // @ts-ignore
            post: action.post,
            __v: 0,
          },
        ],
      };
    }

    case constants.reducers.CLEAR_POSTS: {
      return {
        ...state,
        posts: [],
        searchPosts: [],
      };
    }

    case constants.reducers.CLEAR_SEARCH_POSTS: {
      return {
        ...state,
        searchPosts: [],
      };
    }

    case constants.reducers.SEARCH_POSTS: {
      return {
        ...state,
        searchPosts: [
          ...state.searchPosts,
          {
            // @ts-ignore
            _id: action._id,
            // @ts-ignore
            name: action.name,
            // @ts-ignore
            image: action.image,
            // @ts-ignore
            topic: action.topic,
            // @ts-ignore
            postCreator: action.postCreator,
            // @ts-ignore
            date: action.date,
            // @ts-ignore
            timeToRead: action.timeToRead,
            // @ts-ignore
            post: action.post,
            __v: 0,
          },
        ],
      };
    }

    default:
      return state;
  }
};

// AC
export const actionsPosts = {
  setPost: (
    _id: string,
    name: string,
    image: string,
    topic: string,
    postCreator: string,
    date: string,
    timeToRead: string,
    post: string,
  ) => ({ type: constants.reducers.SET_POST, _id, name, image, topic, postCreator, date, timeToRead, post } as const),

  clearPosts: () =>
    ({
      type: constants.reducers.CLEAR_POSTS,
    } as const),

  clearSearchPosts: () =>
    ({
      type: constants.reducers.CLEAR_SEARCH_POSTS,
    } as const),

  searchPosts: (
    _id: string,
    name: string,
    image: string,
    topic: string,
    postCreator: string,
    date: string,
    timeToRead: string,
    post: string,
  ) =>
    ({ type: constants.reducers.SEARCH_POSTS, _id, name, image, topic, postCreator, date, timeToRead, post } as const),
};

// Thunks
export const getRecentPostsList = (): ThunkPostType => {
  return async dispatch => {
    const response = await postAPI.getPosts();
    dispatch(actionsPosts.clearPosts());
    for (const entry of response) {
      dispatch(
        actionsPosts.setPost(
          entry._id,
          entry.name,
          entry.image,
          entry.topic,
          entry.postCreator,
          entry.date,
          entry.timeToRead,
          entry.post,
        ),
      );
    }
  };
};

export const searchPostsList = (postName: string): ThunkPostType => {
  return async dispatch => {
    const response = await postAPI.getPostsByName(postName);
    dispatch(actionsPosts.clearSearchPosts());
    for (const entry of response) {
      dispatch(
        actionsPosts.searchPosts(
          entry._id,
          entry.name,
          entry.image,
          entry.topic,
          entry.postCreator,
          entry.date,
          entry.timeToRead,
          entry.post,
        ),
      );
    }
  };
};

export const topicPostsList = (topic: string): ThunkPostType => {
  return async dispatch => {
    const response = await postAPI.getPostsByTopic(topic);
    dispatch(actionsPosts.clearSearchPosts());
    for (const entry of response) {
      dispatch(
        actionsPosts.searchPosts(
          entry._id,
          entry.name,
          entry.image,
          entry.topic,
          entry.postCreator,
          entry.date,
          entry.timeToRead,
          entry.post,
        ),
      );
    }
  };
};

export const postCreatorPostsList = (postCreator: string): ThunkPostType => {
  return async dispatch => {
    const response = await postAPI.getPostsByPostCreator(postCreator);
    dispatch(actionsPosts.clearSearchPosts());
    for (const entry of response) {
      dispatch(
        actionsPosts.searchPosts(
          entry._id,
          entry.name,
          entry.image,
          entry.topic,
          entry.postCreator,
          entry.date,
          entry.timeToRead,
          entry.post,
        ),
      );
    }
  };
};

export const createPost = (
  name: string,
  image: string,
  topic: string,
  postCreator: string,
  date: string,
  timeToRead: string,
  post: string,
): ThunkPostType => {
  return async dispatch => {
    await postAPI.createPost(name, image, topic, postCreator, date, timeToRead, post);
  };
};

export default PostsReducer;

export type initialStateType = {
  posts: Array<TPosts>;
  searchPosts: Array<TPosts>;
};
type ActionsTypesPosts = InferActionsTypes<typeof actionsPosts>;
type ThunkPostType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypesPosts>;
