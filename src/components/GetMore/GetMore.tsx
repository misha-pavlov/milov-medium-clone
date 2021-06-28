import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { messages } from '../../config/messages';

const GetMore = () => {
    return <Stack align='center' pt={10}>
        <Button rightIcon={<ChevronDownIcon />} colorScheme="teal" variant="outline" width={250}>
            {messages.getMore}
        </Button>
    </Stack>
}

export default GetMore