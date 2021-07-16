import React from 'react';
import { Image, Link, Stack, useDisclosure } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
import {
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
  twitter?: string;
  gitHub?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
};

const HeaderPost: React.FC<THeaderPost> = ({
  isPostPage,
  isProfilePage,
  user,
  photo,
  gitHub,
  facebook,
  instagram,
  linkedin,
  twitter,
}) => {
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
            {twitter?.includes('twitter.com') && (
              <Link href={twitter} isExternal style={stylesPostPage.iconsZIndex}>
                <TwitterOutlined style={stylesPostPage.icons} />
              </Link>
            )}
            {gitHub?.includes('gitHub.com') && (
              <Link href={gitHub} isExternal style={stylesPostPage.iconsZIndex}>
                <GithubOutlined style={stylesPostPage.icons} />
              </Link>
            )}
            {linkedin?.includes('linkedin.com') && (
              <Link href={linkedin} isExternal style={stylesPostPage.iconsZIndex}>
                <LinkedinOutlined style={stylesPostPage.icons} />
              </Link>
            )}
            {facebook?.includes('facebook.com') && (
              <Link href={facebook} isExternal style={stylesPostPage.iconsZIndex}>
                <FacebookOutlined style={stylesPostPage.icons} />
              </Link>
            )}
            {instagram?.includes('instagram.com') && (
              <Link href={instagram} isExternal style={stylesPostPage.iconsZIndex}>
                <InstagramOutlined style={stylesPostPage.icons} />
              </Link>
            )}
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
