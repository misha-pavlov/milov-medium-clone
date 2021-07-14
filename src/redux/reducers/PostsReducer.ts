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

export type initialStateType = {
  posts: Array<TPosts>;
};

const initialState: initialStateType = {
  posts: [],
};

const PostsReducer = (state = initialState, action: ActionsTypesPosts): initialStateType => {
  switch (action.type) {
    case constants.reducers.SET_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            _id: action._id,
            name: action.name,
            image: action.image,
            topic: action.topic,
            postCreator: action.postCreator,
            date: action.date,
            timeToRead: action.timeToRead,
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
type ActionsTypesPosts = InferActionsTypes<typeof actionsPosts>;

export const actionsPosts = {
  setPost: function (
    _id: string,
    name: string,
    image: string,
    topic: string,
    postCreator: string,
    date: string,
    timeToRead: string,
    post: string,
  ) {
    return {
      type: constants.reducers.SET_POST,
      _id,
      name,
      image,
      topic,
      postCreator,
      date,
      timeToRead,
      post,
    } as const;
  },
};

// Thunks
type ThunkPostType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypesPosts>;

export const getRecentPostsList = (): ThunkPostType => {
  return async dispatch => {
    const response = await postAPI.getPosts();
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

export default PostsReducer;
