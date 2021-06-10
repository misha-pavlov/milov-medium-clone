import React from 'react';
import { Stack, Image, Button, useDisclosure } from '@chakra-ui/react';

import { GoodIdeasText } from '../../MediumMain.styles';
import { messages } from '../../../../config/messages';
import goodIdeaImage from '../../../../assets/img/goodIdea.webp';
import ModalLogin from '../../../../components/ModalLogin/ModalLogin';

const EnterScreen = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return <Stack direction='row' justify='space-between' width={1200} align='center'>
            <Stack>
                <GoodIdeasText>
                    {messages.goodIdea}
                </GoodIdeasText>

                <Button colorScheme="teal" variant="outline" width={250} onClick={onOpen}>
                    {messages.login.signUp}
                </Button>
            </Stack>

            <Stack>
                <Image
                    objectFit="cover"
                    src={goodIdeaImage}
                    alt="goodIdeaImage"
                />
            </Stack>
            <ModalLogin isOpen={isOpen} onClose={onClose} isSignUp />
        </Stack>
}

export default EnterScreen