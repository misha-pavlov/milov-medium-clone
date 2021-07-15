import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Image, Button } from '@chakra-ui/react';

import { topicsStyle } from '../../../components/Topics/Topics.style';
import { constants } from '../../../config/constants';

type TCardTopic = {
  name: string;
  ukr: string;
  image: string;
};

const CardTopic: React.FC<TCardTopic> = ({ name, image, ukr }) => {
  const history = useHistory();

  const goToTopic = () => {
    history.push(`${constants.urls.topic}/${name}`);
  };

  return (
    <Box style={topicsStyle.button}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" height={300}>
        <Image height={215} width={382} src={image} alt={'Topic image'} />

        <Box p="6">
          <Button variant="link" onClick={goToTopic}>
            {ukr}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CardTopic;
