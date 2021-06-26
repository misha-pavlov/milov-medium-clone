import React from 'react';
import {Button, Image, Stack, useDisclosure} from '@chakra-ui/react';

import leftImage from '../../../../assets/img/OurStory/think.webp';
import { CreateYourThinksText } from '../../OurStoryPage.styles';
import { messages } from '../../../../config/messages';
import ModalLogin from '../../../../components/ModalLogin/ModalLogin';

const SectionWithImage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return <Stack align='center' width={1200} pb={50}>
        <Stack direction='row' align='center'>
            <Stack>
                <Image
                    objectFit="fill"
                    src={leftImage}
                    alt="postImage"
                />
            </Stack>

            <Stack align='center'>
                <CreateYourThinksText>{messages.readWrite}</CreateYourThinksText>
                <Button colorScheme='green' variant='outline' borderRadius={50} onClick={onOpen}>
                    {messages.login.signUp}
                </Button>
            </Stack>
        </Stack>
        <ModalLogin isOpen={isOpen} onClose={onClose} isSignUp />
    </Stack>
}

export default SectionWithImage