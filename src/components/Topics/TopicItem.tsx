import React from 'react';
import { Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { topicsStyle } from './Topics.style';
import { constants } from '../../config/constants';

const TopicItem = () => {
  const history = useHistory();

  const goToTopic = () => {
    history.push(constants.urls.topic);
  };

  return (
    <Button variant="outline" colorScheme="green" width={125} style={topicsStyle.button} onClick={goToTopic}>
      Topic
    </Button>
  );
};

export default TopicItem;
