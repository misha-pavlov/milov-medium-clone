import React from 'react';
import { Button, Stack, useDisclosure } from '@chakra-ui/react';

import { CreateYourThinksText, TextUnderCreateYourThinksText } from '../../OurStoryPage.styles';
import { messages } from '../../../../config/messages';
import ModalLogin from '../../../../components/ModalLogin/ModalLogin';

const OurStoryPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack align="center" pb={100}>
      <CreateYourThinksText>{messages.createYourThinks}</CreateYourThinksText>
      <TextUnderCreateYourThinksText>{messages.ourStoryText2}</TextUnderCreateYourThinksText>
      <Button colorScheme="green" variant="outline" size="lg" width={250} borderRadius={50} onClick={onOpen}>
        {messages.login.write}
      </Button>
      <ModalLogin isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
};

export default OurStoryPage;
