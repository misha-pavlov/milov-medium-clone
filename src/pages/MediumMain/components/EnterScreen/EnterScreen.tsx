import React from 'react';
import { Stack, Image, Button, useDisclosure } from '@chakra-ui/react';

import { GoodIdeasText, TextUnderEnterText } from '../../MediumMain.styles';
import { messages } from '../../../../config/messages';
import goodIdeaImage from '../../../../assets/img/goodIdea.webp';
import everyIdeaImage from '../../../../assets/img/OurStory/enter.webp';
import ModalLogin from '../../../../components/ModalLogin/ModalLogin';
import { TMediumMain } from '../../MediumMain';

type TEnterScreen = {
  isOurStory?: boolean;
};

const EnterScreen: React.FC<TEnterScreen & TMediumMain> = ({ isOurStory, isAuth }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack direction={isOurStory ? 'column' : 'row'} justify="space-between" width={1200} align="center">
      <Stack>
        <GoodIdeasText isOurStory={isOurStory}>{isOurStory ? messages.everyIdea : messages.goodIdea}</GoodIdeasText>

        {isOurStory && <TextUnderEnterText>{messages.ourStoryText1}</TextUnderEnterText>}

        {!isOurStory && (
          <Button
            // @ts-ignore
            visibility={isAuth ? 'hidden' : 'show'}
            colorScheme="teal"
            variant="outline"
            width={250}
            onClick={onOpen}>
            {messages.login.signUp}
          </Button>
        )}
      </Stack>

      <Stack>
        <Image objectFit="cover" src={isOurStory ? everyIdeaImage : goodIdeaImage} alt="enterImage" />
      </Stack>
      <ModalLogin isOpen={isOpen} onClose={onClose} isSignUp />
    </Stack>
  );
};

export default EnterScreen;
