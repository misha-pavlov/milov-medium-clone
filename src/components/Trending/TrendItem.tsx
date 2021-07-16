import React, { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { DefaultText, TrendingNumber, PostDateTime } from '../../config/fonts';
import HeaderPost from '../HeaderPost/HeaderPost';
import { constants } from '../../config/constants';
import useUsersData from '../../hooks/useUsersData';

type TTrendItem = {
  trendNumber?: string;
  name: string;
  date: string;
  timeToRead: string;
  user: string;
};

const TrendItem: React.FC<TTrendItem> = ({ trendNumber, user, name, timeToRead, date }) => {
  const history = useHistory();
  const [photo, setPhoto] = useState<any>(undefined);
  useUsersData(user)
    .then(success => setPhoto(success))
    .catch(err => err);

  const goToPost = () => {
    history.push(constants.urls.post);
  };

  return (
    <Stack direction="row" width={350} spacing={10}>
      <Stack>
        <TrendingNumber>{trendNumber ? trendNumber : '01'}</TrendingNumber>
      </Stack>

      <Stack>
        <HeaderPost user={user} photo={photo} />
        <Stack onClick={goToPost}>
          <DefaultText pointer isBold>
            {name}
          </DefaultText>
        </Stack>
        <Stack>
          <PostDateTime>
            {date} • {timeToRead}
          </PostDateTime>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TrendItem;
