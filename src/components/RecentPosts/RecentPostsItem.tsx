import React from 'react';
import { Stack, Image, useDisclosure } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { DefaultText, PostDateTime } from '../../config/fonts';
import HeaderPost from '../HeaderPost/HeaderPost';
import ModalLogin from '../ModalLogin/ModalLogin';
import { constants } from '../../config/constants';
import { stylesRecentPosts } from './RecentPosts.styles';

type TRecentPostsItem = {
  isSearchPosts?: boolean;
  name: string;
  date: string;
  timeToRead: string;
  image: string;
};

const RecentPostsItem: React.FC<TRecentPostsItem> = ({ isSearchPosts, name, date, timeToRead, image }) => {
  const { isOpen, onClose } = useDisclosure();
  const history = useHistory();

  const goToPost = () => {
    history.push(constants.urls.post);
  };

  return (
    <Stack
      width={700}
      direction="row"
      justify="space-between"
      align="center"
      style={isSearchPosts ? stylesRecentPosts.body : {}}>
      <Stack width={450}>
        <HeaderPost />
        <Stack onClick={goToPost} cursor="pointer">
          <DefaultText isBold>{name}</DefaultText>
        </Stack>
        <Stack direction="row" justify="space-between">
          <PostDateTime>
            {date} • {timeToRead}
          </PostDateTime>
        </Stack>
      </Stack>

      <Stack>
        <Image objectFit="fill" src={image} alt="postImage" height={134} maxWidth={200} />
      </Stack>
      <ModalLogin isOpen={isOpen} onClose={onClose} isSignUp />
    </Stack>
  );
};

export default RecentPostsItem;
