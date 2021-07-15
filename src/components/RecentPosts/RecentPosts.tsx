import React from 'react';
import { Stack } from '@chakra-ui/react';

import RecentPostsItem from './RecentPostsItem';
import { RecentPost } from '../../config/fonts';
import { messages } from '../../config/messages';
import GetMore from '../GetMore/GetMore';
import { TPosts } from '../../redux/reducers/PostsReducer';

type TRecentPosts = {
  posts: Array<TPosts>;
};

const RecentPosts: React.FC<TRecentPosts> = ({ posts }) => {
  const postsList = posts.map(p => (
    <RecentPostsItem
      key={p._id}
      user={p.postCreator}
      name={p.name}
      date={p.date}
      timeToRead={p.timeToRead}
      image={p.image}
    />
  ));

  return (
    <Stack width={800}>
      <RecentPost>{messages.recentPost}</RecentPost>
      {postsList}
      <GetMore />
    </Stack>
  );
};

export default RecentPosts;
