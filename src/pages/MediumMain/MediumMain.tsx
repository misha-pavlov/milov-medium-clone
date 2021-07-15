import React from 'react';
import { Stack } from '@chakra-ui/react';

import Header from '../../components/Header/Header';
import EnterScreen from './components/EnterScreen/EnterScreen';
import TrendingContainer from '../../components/Trending/TrendingContainer';
import RecentPostsContainer from '../../components/RecentPosts/RecentPostsContainer';
import Topics from '../../components/Topics/Topics';
import Footer from '../../components/Footer/Footer';

export type TMediumMain = {
  isAuth: boolean;
  removeLocalStorageItem?: () => void;
  addLocalStorageItem?: (params: string) => void;
};

const MediumMain: React.FC<TMediumMain> = ({ isAuth, removeLocalStorageItem, addLocalStorageItem }) => {
  return (
    <Stack align="center">
      <Header
        addLocalStorageItem={addLocalStorageItem}
        isAuth={isAuth}
        removeLocalStorageItem={removeLocalStorageItem}
      />
      <EnterScreen isAuth={isAuth} />
      <TrendingContainer />
      <Stack direction="row" pb={50}>
        <RecentPostsContainer />
        <Topics />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default MediumMain;
