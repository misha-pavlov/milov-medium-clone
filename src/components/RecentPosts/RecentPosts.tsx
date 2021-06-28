import React from 'react';
import { Stack } from '@chakra-ui/react';

import RecentPostsItem from './RecentPostsItem';
import { RecentPost } from '../../config/fonts';
import { messages } from '../../config/messages';
import GetMore from '../GetMore/GetMore';

const RecentPosts = () => {
    return <Stack width={800}>
        <RecentPost>{messages.recentPost}</RecentPost>
        <RecentPostsItem/>
        <RecentPostsItem/>
        <RecentPostsItem/>
        <RecentPostsItem/>
        <RecentPostsItem/>
        <RecentPostsItem/>
        <RecentPostsItem/>
        <RecentPostsItem/>
        <RecentPostsItem/>
        <RecentPostsItem/>
        <GetMore/>
    </Stack>
}

export default RecentPosts