import React from 'react';
import { Stack } from '@chakra-ui/react';

import Header from '../../components/Header/Header'
import EnterScreen from './components/EnterScreen/EnterScreen';
import TrendingContainer from '../../components/Trending/TrendingContainer';
import RecentPostsContainer from '../../components/RecentPosts/RecentPostsContainer';
import TopicsContainer from '../../components/Topics/TopicsContainer';
import Footer from '../../components/Footer/Footer';

const MediumMain = () => {
    return <Stack align='center'>
        <Header/>
        <EnterScreen/>
        <TrendingContainer/>
        <Stack direction='row' pb={50}>
            <RecentPostsContainer/>
            <TopicsContainer/>
        </Stack>
        <Footer/>
    </Stack>
}

export default MediumMain