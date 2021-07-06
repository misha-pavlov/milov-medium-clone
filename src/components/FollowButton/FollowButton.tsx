import React from 'react';
import { Button } from '@chakra-ui/react';

import { messages } from '../../config/messages';

type TFollowButton = {
  size?: string;
  onClick: () => void;
};

const FollowButton: React.FC<TFollowButton> = ({ size = 'sm', onClick }) => {
  return (
    <Button colorScheme="green" disabled={true} size={size} variant="outline" borderRadius={50} onClick={onClick}>
      {messages.buttons.follow}
    </Button>
  );
};

export default FollowButton;
