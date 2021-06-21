import React from 'react';
import { Stack } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

import { PostCreator } from '../../config/fonts';

const HeaderPost = () => {
    return <Stack direction='row' align='center' mb={2}>
        <Stack>
            <QuestionIcon boxSize={5} />
        </Stack>

        <PostCreator>
            Name user
        </PostCreator>
    </Stack>
}

export default HeaderPost