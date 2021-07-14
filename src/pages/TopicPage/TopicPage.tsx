import React from 'react';
import { Stack, useDisclosure } from '@chakra-ui/react';

import Header from '../../components/Header/Header';
import TopicsContainer from '../../components/Topics/TopicsContainer';
import RecentPostsItem from '../../components/RecentPosts/RecentPostsItem';
import { RecentPost } from '../../config/fonts';
import FollowButton from '../../components/FollowButton/FollowButton';
import ModalLogin from '../../components/ModalLogin/ModalLogin';
import Footer from '../../components/Footer/Footer';
import HeaderPost from '../../components/HeaderPost/HeaderPost';
import GetMore from '../../components/GetMore/GetMore';
import { TMediumMain } from '../MediumMain/MediumMain';

type TTopicPage = {
  isProfilePage?: boolean;
};

const TopicPage: React.FC<TTopicPage & TMediumMain> = ({
  isProfilePage,
  isAuth,
  removeLocalStorageItem,
  addLocalStorageItem,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack>
      <Header
        addLocalStorageItem={addLocalStorageItem}
        isAuth={isAuth}
        removeLocalStorageItem={removeLocalStorageItem}
      />
      <Stack justify="center" direction="row">
        <Stack width={800} mb={50}>
          <Stack direction="row" align="center" mb={50}>
            {isProfilePage ? <HeaderPost isPostPage isProfilePage /> : <RecentPost isTopicPage>TopicName</RecentPost>}
            {!isProfilePage && <FollowButton onClick={onOpen} />}
          </Stack>
          <RecentPostsItem name="" image="" timeToRead="" date="" />
          <RecentPostsItem name="" image="" timeToRead="" date="" />
          <RecentPostsItem name="" image="" timeToRead="" date="" />
          <RecentPostsItem name="" image="" timeToRead="" date="" />
          <RecentPostsItem name="" image="" timeToRead="" date="" />
          <GetMore />
        </Stack>

        <Stack width={375}>
          <Stack mt={50}>
            <TopicsContainer />
          </Stack>
        </Stack>
      </Stack>
      <ModalLogin isOpen={isOpen} onClose={onClose} isSignUp />
      <Footer />
    </Stack>
  );
};

export default TopicPage;
