import React from 'react';
import { Stack } from '@chakra-ui/react';

import RecentPostsItem from './RecentPostsItem';
import { RecentPost } from '../../config/fonts';
import { messages } from '../../config/messages';

const RecentPosts = () => {
    return <Stack width={800} mt={10}>
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
    </Stack>
}

export default RecentPosts