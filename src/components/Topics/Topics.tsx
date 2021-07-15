import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { messages } from '../../config/messages';
import { DefaultText } from '../../config/fonts';
import TopicItem from './TopicItem';
import { constants } from '../../config/constants';
import {
  ArtAndEntertainment,
  Culture,
  Health,
  Industry,
  PersonalDevelopment,
  Programming,
  Science,
  Technology,
} from '../../config/allTopicsData';

const Topics = () => {
  const history = useHistory();

  const goToAllTopic = () => {
    history.push(constants.urls.topics);
  };

  return (
    <Stack width={400} mt={10}>
      <DefaultText>{messages.topic}</DefaultText>

      <Stack mt={30} direction="row" wrap="wrap">
        <TopicItem name={ArtAndEntertainment[0].name} ukr={ArtAndEntertainment[0].ukr} />
        <TopicItem name={Culture[0].name} ukr={Culture[0].ukr} />
        <TopicItem name={Health[0].name} ukr={Health[0].ukr} />
        <TopicItem name={Industry[0].name} ukr={Industry[0].ukr} />
        <TopicItem name={PersonalDevelopment[0].name} ukr={PersonalDevelopment[0].ukr} />
        <TopicItem name={Programming[3].name} ukr={Programming[3].ukr} />
        <TopicItem name={Science[0].name} ukr={Science[0].ukr} />
        <TopicItem name={Technology[1].name} ukr={Technology[1].ukr} />
        <TopicItem name={Programming[1].name} ukr={Programming[1].ukr} />
      </Stack>

      <Stack>
        <Button width={71} variant="link" colorScheme="green" onClick={goToAllTopic}>
          {messages.allTopics}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Topics;
