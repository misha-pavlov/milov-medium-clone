import React from 'react';
import { Stack, useDisclosure } from '@chakra-ui/react';

import Header from '../../components/Header/Header';
import Topics from '../../components/Topics/Topics';
import RecentPostsItem from '../../components/RecentPosts/RecentPostsItem';
import { RecentPost, SearchEmptyList } from '../../config/fonts';
import FollowButton from '../../components/FollowButton/FollowButton';
import ModalLogin from '../../components/ModalLogin/ModalLogin';
import Footer from '../../components/Footer/Footer';
import HeaderPost from '../../components/HeaderPost/HeaderPost';
import GetMore from '../../components/GetMore/GetMore';
import { TMediumMain } from '../MediumMain/MediumMain';
import { TPosts } from '../../redux/reducers/PostsReducer';
import { messages } from '../../config/messages';

type TTopicPage = {
  isProfilePage?: boolean;
  ukr: string;
  searchPosts: Array<TPosts>;
};

const TopicPage: React.FC<TTopicPage & TMediumMain> = ({
  isProfilePage,
  isAuth,
  removeLocalStorageItem,
  addLocalStorageItem,
  searchPosts,
  ukr,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const topicPostsList = searchPosts.map(s => (
    <RecentPostsItem key={s._id} name={s.name} date={s.date} timeToRead={s.timeToRead} image={s.image} />
  ));

  return (
    <Stack>
      <Header
        addLocalStorageItem={addLocalStorageItem}
        isAuth={isAuth}
        removeLocalStorageItem={removeLocalStorageItem}
      />
      <Stack justify="center" direction="row" style={{ minHeight: '80vh' }}>
        <Stack width={800} mb={50}>
          <Stack direction="row" align="center" mb={50}>
            {isProfilePage ? <HeaderPost isPostPage isProfilePage /> : <RecentPost isTopicPage>{ukr}</RecentPost>}
            {!isProfilePage && <FollowButton onClick={onOpen} />}
          </Stack>
          {topicPostsList.length === 0 ? (
            <SearchEmptyList needBlackFontColor>{messages.emptySearchList}</SearchEmptyList>
          ) : (
            <Stack align="center">{topicPostsList}</Stack>
          )}
          <GetMore />
        </Stack>

        <Stack width={375}>
          <Stack mt={50}>
            <Topics />
          </Stack>
        </Stack>
      </Stack>
      <ModalLogin isOpen={isOpen} onClose={onClose} isSignUp />
      <Footer />
    </Stack>
  );
};

export default TopicPage;
