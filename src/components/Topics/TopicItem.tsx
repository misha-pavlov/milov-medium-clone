import React from 'react';
import { Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { topicsStyle } from './Topics.style';
import { constants } from '../../config/constants';

type TTopicItem = {
  name: string;
  ukr: string;
};

const TopicItem: React.FC<TTopicItem> = ({ name, ukr }) => {
  const history = useHistory();

  const goToTopic = () => {
    history.push(`${constants.urls.topic}/${name}/${ukr}`);
  };

  return (
    <Button variant="outline" colorScheme="green" width={125} style={topicsStyle.button} onClick={goToTopic}>
      {ukr}
    </Button>
  );
};

export default TopicItem;
