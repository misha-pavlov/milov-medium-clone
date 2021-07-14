export const constants = {
  urls: {
    medium: '/medium',
    ourStory: '/ourStory',
    post: '/post/:namePost/:id',
    topic: '/topic/:nameTopic',
    topics: '/topics',
    profile: '/profile/:id',
    redirect: '/',
    error: '*',
  },

  signIn: {
    apple: 'Apple',
    userName: 'userName',
    facebook: 'Facebook',
    google: 'Google',
    twitter: 'Twitter',
  },

  reducers: {
    SET_USER: 'SET_USER',
    ADD_USER: 'ADD_USER',

    SET_POST: 'SET_POST',
    CLEAR_POSTS: 'CLEAR_POSTS',
  },

  localStorage: {
    user: 'user',
  },
};
