import React from 'react';
import { Image, Stack, useDisclosure } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
import {
  BookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { PostCreator } from '../../config/fonts';
import { stylesPostPage } from './HeaderPost.styles';
import ModalLogin from '../ModalLogin/ModalLogin';
import FollowButton from '../FollowButton/FollowButton';
import { constants } from '../../config/constants';

type THeaderPost = {
  isPostPage?: boolean;
  isProfilePage?: boolean;
  user?: string;
  photo?: string;
};

const HeaderPost: React.FC<THeaderPost> = ({ isPostPage, isProfilePage, user, photo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const goToProfile = () => {
    history.push(`${constants.urls.profile}/${user}`);
  };

  return (
    <Stack direction="row" align="center" mb={2}>
      <Stack>
        {photo ? (
          <Image borderRadius="full" boxSize={isPostPage ? 35 : 5} src={photo} alt="user" />
        ) : (
          <QuestionIcon boxSize={isPostPage ? 35 : 5} />
        )}
      </Stack>
      {isPostPage ? (
        <Stack direction="row" align="center" justify="space-between" width={isProfilePage ? 1150 : 900}>
          <Stack direction="row" align="center">
            <PostCreator isPostPage={isPostPage} onClick={goToProfile}>
              {user ? user : 'Name user'}
            </PostCreator>
            <FollowButton onClick={onOpen} />
          </Stack>

          <Stack direction="row" align="center" spacing={5}>
            <TwitterOutlined style={stylesPostPage.icons} />
            <GithubOutlined style={stylesPostPage.icons} />
            <LinkedinOutlined style={stylesPostPage.icons} />
            <FacebookOutlined style={stylesPostPage.icons} />
            <InstagramOutlined style={stylesPostPage.icons} />
            <BookOutlined style={stylesPostPage.icons} onClick={onOpen} />
          </Stack>
        </Stack>
      ) : (
        <Stack direction="row" align="center">
          <PostCreator isPostPage={isPostPage} onClick={goToProfile}>
            {user ? user : 'Name user'}
          </PostCreator>
        </Stack>
      )}
      <ModalLogin isOpen={isOpen} onClose={onClose} isSignUp />
    </Stack>
  );
};

export default HeaderPost;
