import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Image, Button } from '@chakra-ui/react';

import { topicsStyle } from '../../../components/Topics/Topics.style';
import { constants } from '../../../config/constants';

const CardTopic = () => {
    const history = useHistory();

    const goToTopic = () => {
        history.push(constants.urls.topic);
    }

    return <Box style={topicsStyle.button}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={'https://smutr.com/contents/videos_screenshots/138000/138318/preview.mp4.jpg'}
                   alt={'Topic image'} />

            <Box p="6">
                <Button variant='link' onClick={goToTopic}>
                    Topic Name
                </Button>
            </Box>
        </Box>
    </Box>
}

export default CardTopic