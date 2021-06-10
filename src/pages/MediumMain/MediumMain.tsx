import React from 'react';
import { Stack } from '@chakra-ui/react';

import Header from '../../components/Header/Header'
import EnterScreen from './components/EnterScreen/EnterScreen';

const MediumMain = () => {
    return <Stack align='center'>
        <Header/>
        <EnterScreen/>
    </Stack>
}

export default MediumMain