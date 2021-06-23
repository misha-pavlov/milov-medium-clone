import React from 'react';
import { Stack } from '@chakra-ui/react';

import Header from '../../components/Header/Header'
import EnterScreen from './components/EnterScreen/EnterScreen';
import TrendingContainer from '../../components/Trending/TrendingContainer';
import RecentPostsContainer from '../../components/RecentPosts/RecentPostsContainer';
import TopicsContainer from '../../components/Topics/TopicsContainer';

const MediumMain = () => {
    return <Stack align='center'>
        <Header/>
        <EnterScreen/>
        <TrendingContainer/>
        <Stack direction='row'>
            <RecentPostsContainer/>
            <TopicsContainer/>
        </Stack>
    </Stack>
}

export default MediumMain