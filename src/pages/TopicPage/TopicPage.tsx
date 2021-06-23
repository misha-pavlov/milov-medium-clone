import React from 'react';
import { Stack, useDisclosure } from '@chakra-ui/react';

import Header from '../../components/Header/Header';
import TopicsContainer from '../../components/Topics/TopicsContainer';
import RecentPostsItem from '../../components/RecentPosts/RecentPostsItem';
import { RecentPost } from '../../config/fonts';
import FollowButton from '../../components/FollowButton/FollowButton';
import ModalLogin from '../../components/ModalLogin/ModalLogin';
import Footer from '../../components/Footer/Footer';

const TopicPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return <Stack>
        <Header/>
        <Stack justify='center' direction='row'>
            <Stack width={800} mb={50}>
                <Stack direction='row' align='center' mb={50}>
                    <RecentPost isTopicPage>TopicName</RecentPost>
                    <FollowButton onClick={onOpen} />
                </Stack>
                <RecentPostsItem/>
                <RecentPostsItem/>
                <RecentPostsItem/>
                <RecentPostsItem/>
                <RecentPostsItem/>
                <RecentPostsItem/>
                <RecentPostsItem/>
            </Stack>

            <Stack width={375}>
                <Stack mt={50}>
                    <TopicsContainer/>
                </Stack>
            </Stack>
        </Stack>
        <ModalLogin isOpen={isOpen} onClose={onClose} isSignUp />
        <Footer/>
    </Stack>
}

export default TopicPage