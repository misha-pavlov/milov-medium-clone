import React from 'react';
import { Stack, Image } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

import { PostCreator, DefaultText, PostDateTime } from '../../../../config/fonts';

const RecentPosts = () => {
    return <Stack width={700} direction='row'>
        <Stack>
            <Stack>name creator</Stack>
            <Stack>post name</Stack>
            <Stack>date and time</Stack>
            <Stack>save</Stack>
        </Stack>

        <Stack>image</Stack>
    </Stack>
}

export default RecentPosts