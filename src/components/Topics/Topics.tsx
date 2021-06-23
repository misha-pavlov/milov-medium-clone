import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { messages } from '../../config/messages';
import { DefaultText } from '../../config/fonts';
import TopicItem from './TopicItem';
import { constants } from '../../config/constants';

const Topics = () => {
    const history = useHistory();

    const goToAllTopic = () => {
        history.push(constants.urls.topics);
    }

    return <Stack width={400} mt={10}>
        <DefaultText>
            {messages.topic}
        </DefaultText>

        <Stack mt={30} direction='row' wrap='wrap'>
            <TopicItem/>
            <TopicItem/>
            <TopicItem/>
            <TopicItem/>
            <TopicItem/>
            <TopicItem/>
            <TopicItem/>
            <TopicItem/>
            <TopicItem/>
        </Stack>

        <Stack>
            <Button width={71} variant='link' colorScheme='green' onClick={goToAllTopic}>
                {messages.allTopics}
            </Button>
        </Stack>
    </Stack>
}

export default Topics