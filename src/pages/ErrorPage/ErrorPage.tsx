import React from 'react';
import { Image, Stack, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router';

import ErrorImage from '../../assets/img/errorImage.svg';
import { ErrorPageBlock, Text404, TextPageNotFound, TextBlock } from './ErrorPage.styles';
import { messages } from '../../config/messages';

const ErrorPage = () => {
    const history = useHistory();

    return <ErrorPageBlock>
        <Stack flexDirection='row' justifyContent='center' alignItems='center'>
            <Image
                objectFit="cover"
                src={ErrorImage}
                alt="Error image"
            />

            <TextBlock>
                <Text404>
                    404
                </Text404>

                <TextPageNotFound>
                    {messages.error.pageNotFound}
                </TextPageNotFound>

                <Button leftIcon={<ArrowBackIcon />} onClick={history.goBack} colorScheme="teal" variant="solid">
                    {messages.buttons.back}
                </Button>
            </TextBlock>
        </Stack>
    </ErrorPageBlock>
}

export default ErrorPage