import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { DefaultText, TrendingNumber, PostDateTime } from '../../config/fonts';
import HeaderPost from '../HeaderPost/HeaderPost';
import { constants } from '../../config/constants';

type TTrendItem = {
  trendNumber?: string;
  name: string;
  date: string;
  timeToRead: string;
  user: string;
};

const TrendItem: React.FC<TTrendItem> = ({ trendNumber, user, name, timeToRead, date }) => {
  const history = useHistory();

  const goToPost = () => {
    history.push(constants.urls.post);
  };

  return (
    <Stack direction="row" width={350} spacing={10}>
      <Stack>
        <TrendingNumber>{trendNumber ? trendNumber : '01'}</TrendingNumber>
      </Stack>

      <Stack>
        <HeaderPost user={user} />
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
