import React from 'react';
import { Stack } from '@chakra-ui/react';

import Header from '../../components/Header/Header'
import EnterScreen from './components/EnterScreen/EnterScreen';
import TrendingContainer from '../../components/Trending/TrendingContainer';
import RecentPostsContainer from '../../components/RecentPosts/RecentPostsContainer';

const MediumMain = () => {
    return <Stack align='center'>
        <Header/>
        <EnterScreen/>
        <TrendingContainer/>
        <RecentPostsContainer/>
    </Stack>
}

export default MediumMain