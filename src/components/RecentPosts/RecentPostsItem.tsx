import React, { useState } from 'react';
import { Stack, Image, useDisclosure } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { DefaultText, PostDateTime } from '../../config/fonts';
import HeaderPost from '../HeaderPost/HeaderPost';
import ModalLogin from '../ModalLogin/ModalLogin';
import { constants } from '../../config/constants';
import { stylesRecentPosts } from './RecentPosts.styles';
import useUsersData from '../../hooks/useUsersData';
import EmptyImage from '../../assets/img/EmptyImage.png';

type TRecentPostsItem = {
  isSearchPosts?: boolean;
  name: string;
  date: string;
  timeToRead: string;
  image: string;
  user: string;
  _id: string;
};

const RecentPostsItem: React.FC<TRecentPostsItem> = ({ isSearchPosts, user, name, date, timeToRead, image, _id }) => {
  const { isOpen, onClose } = useDisclosure();
  const history = useHistory();
  const [userData, setUserData] = useState<any>(undefined);
  useUsersData(user)
    .then(success => setUserData(success))
    .catch(err => err);

  const goToPost = () => {
    history.push(`${constants.urls.post}/${name}/${_id}`);
  };

  return (
    <Stack
      width={700}
      direction="row"
      justify="space-between"
      align="center"
      style={isSearchPosts ? stylesRecentPosts.body : {}}>
      <Stack width={450}>
        <HeaderPost user={user} photo={userData?.photo} />
        <Stack onClick={goToPost} cursor="pointer">
          <DefaultText isBold>{name}</DefaultText>
        </Stack>
        <Stack direction="row" justify="space-between">
          <PostDateTime>
            {date} • {timeToRead} хвилин
          </PostDateTime>
        </Stack>
      </Stack>

      <Stack>
        <Image
          objectFit="fill"
          src={image.includes('http' || 'https') ? image : EmptyImage}
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
