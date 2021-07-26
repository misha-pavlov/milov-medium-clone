import React, { useState } from 'react';
import { Image, Stack } from '@chakra-ui/react';
import ReactHtmlParser from 'react-html-parser';

import Header from '../../components/Header/Header';
import HeaderPost from '../../components/HeaderPost/HeaderPost';
import TrendingContainer from '../../components/Trending/TrendingContainer';
import Footer from '../../components/Footer/Footer';
import { PostHeader } from './PostPage.styles';
import { TMediumMain } from '../MediumMain/MediumMain';
import { TPosts } from '../../redux/reducers/PostsReducer';
import useUsersData from '../../hooks/useUsersData';

const PostPage: React.FC<TMediumMain & { currentPost: TPosts }> = ({
  isAuth,
  removeLocalStorageItem,
  addLocalStorageItem,
  currentPost,
}) => {
  const [user, setUser] = useState<any>(undefined);
  useUsersData(currentPost.postCreator)
    .then(success => setUser(success))
    .catch(err => err);

  return (
    <Stack>
      <Header
        addLocalStorageItem={addLocalStorageItem}
        removeLocalStorageItem={removeLocalStorageItem}
        isAuth={isAuth}
      />
      <Stack align="center">
        <Stack width={900}>
          <PostHeader>{currentPost.name}</PostHeader>

          <Stack mb={50}>
            <HeaderPost user={user?.userName} photo={user?.photo} isPostPage />
          </Stack>

          <Stack pb={55}>
            <Image objectFit="fill" src={currentPost.image} alt="postImage" maxWidth={900} maxHeight={1000} />
          </Stack>

          {/* eslint-disable-next-line new-cap */}
          <Stack>{ReactHtmlParser(currentPost.post)}</Stack>
        </Stack>

        <Stack>
          <TrendingContainer />
        </Stack>

        <Stack>
          <Footer />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PostPage;
