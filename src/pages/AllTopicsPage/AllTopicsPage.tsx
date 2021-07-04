import React from 'react';
import { Stack, Divider } from '@chakra-ui/react';

import Header from '../../components/Header/Header';
import { RecentPost } from '../../config/fonts';
import CardTopic from './components/CardTopic';
import { TMediumMain } from '../MediumMain/MediumMain';

const AllTopicsPage:React.FC<TMediumMain> = ({ isAuth, setIsAuth,
                                                 removeLocalStorageItem, addLocalStorageItem }) => {
    return <Stack>
        <Header addLocalStorageItem={addLocalStorageItem}
                isAuth={isAuth} setIsAuth={setIsAuth} removeLocalStorageItem={removeLocalStorageItem} />
        <Stack align='center'>
            <Stack width={1200}>
                <RecentPost>TopicName</RecentPost>
                <Divider orientation="horizontal" colorScheme='green' />

                <Stack direction='row' wrap='wrap' justify='space-between'>
                    <CardTopic/>
                    <CardTopic/>
                    <CardTopic/>
                    <CardTopic/>
                    <CardTopic/>
                    <CardTopic/>
                    <CardTopic/>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
}

export default AllTopicsPage