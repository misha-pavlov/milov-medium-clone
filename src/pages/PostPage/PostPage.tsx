import React from 'react';
import { Image, Stack } from '@chakra-ui/react';

import Header from '../../components/Header/Header';
import HeaderPost from '../../components/HeaderPost/HeaderPost';
import TrendingContainer from '../../components/Trending/TrendingContainer';
import Footer from '../../components/Footer/Footer';
import { PostHeader } from './PostPage.styles';
import { TMediumMain } from '../MediumMain/MediumMain';

const PostPage: React.FC<TMediumMain> = ({ isAuth, removeLocalStorageItem, addLocalStorageItem }) => {
  return (
    <Stack>
      <Header
        addLocalStorageItem={addLocalStorageItem}
        removeLocalStorageItem={removeLocalStorageItem}
        isAuth={isAuth}
      />
      <Stack align="center">
        <Stack width={900}>
          <PostHeader>How sex help you in life!</PostHeader>

          <Stack mb={50}>
            <HeaderPost isPostPage />
          </Stack>

          <Stack mb={50}>
            <Image
              objectFit="fill"
              src={'https://www.w3bai.com/css/lights600x400.jpg'}
              alt="postImage"
              maxWidth={900}
              maxHeight={1000}
            />
          </Stack>

          <Stack mb={50}>
            <p>Text in this section</p>
          </Stack>
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
