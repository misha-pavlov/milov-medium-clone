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
  console.log(posts);
  return (
    <Stack width={800}>
      <RecentPost>{messages.recentPost}</RecentPost>
      <RecentPostsItem />
      <RecentPostsItem />
      <RecentPostsItem />
      <RecentPostsItem />
      <RecentPostsItem />
      <RecentPostsItem />
      <RecentPostsItem />
      <RecentPostsItem />
      <RecentPostsItem />
      <RecentPostsItem />
      <GetMore />
    </Stack>
  );
};

export default RecentPosts;
