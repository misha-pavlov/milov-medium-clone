import React from 'react';
import { Stack, Image, useDisclosure, Button } from '@chakra-ui/react';
import { BookOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { DefaultText, PostDateTime } from '../../config/fonts';
import HeaderPost from '../HeaderPost/HeaderPost';
import ModalLogin from '../ModalLogin/ModalLogin';
import { constants } from '../../config/constants';
import { stylesRecentPosts } from './RecentPosts.styles';
import { colors } from '../../config/colors';

type TRecentPostsItem = {
  isSearchPosts?: boolean;
};

const RecentPostsItem: React.FC<TRecentPostsItem> = ({ isSearchPosts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <DefaultText isBold>How sex help you in life!</DefaultText>
        </Stack>
        <Stack direction="row" justify="space-between">
          <PostDateTime>Date • Time</PostDateTime>
          <Button variant="ghost" _hover={{ bg: colors.white2 }} disabled={true}>
            <BookOutlined style={stylesRecentPosts.saveIcon} onClick={onOpen} />
          </Button>
        </Stack>
      </Stack>

      <Stack>
        <Image
          objectFit="fill"
          src={'https://www.w3bai.com/css/lights600x400.jpg'}
          alt="postImage"
          height={134}
          maxWidth={200}
        />
      </Stack>
      <ModalLogin isOpen={isOpen} onClose={onClose} isSignUp />
    </Stack>
  );
};

export default RecentPostsItem;
