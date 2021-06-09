import React from 'react';
import { Image, Stack } from "@chakra-ui/react"

import ErrorImage from '../../assets/img/errorImage.svg'
import { ErrorPageBlock, Text404, TextPageNotFound, TextBlock } from './ErrorPage.styles'

const ErrorPage = () => {
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
                    page not found
                </TextPageNotFound>
            </TextBlock>
        </Stack>
    </ErrorPageBlock>
}

export default ErrorPage