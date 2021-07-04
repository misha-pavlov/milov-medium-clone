import React from 'react';
import { Stack } from '@chakra-ui/react';

import Header from '../../components/Header/Header';
import EnterScreen from '../MediumMain/components/EnterScreen/EnterScreen';
import CreateYourThinks from './components/CreateYourThinks/CreateYourThinks';
import SectionWithImage from './components/SectionWithImage/SectionWithImage';
import Footer from '../../components/Footer/Footer';
import { TMediumMain } from '../MediumMain/MediumMain';

const OurStoryPage:React.FC<TMediumMain> = ({ isAuth, setIsAuth,
                                                removeLocalStorageItem, addLocalStorageItem }) => {
    return <Stack align='center'>
        <Header addLocalStorageItem={addLocalStorageItem}
                isAuth={isAuth} setIsAuth={setIsAuth} removeLocalStorageItem={removeLocalStorageItem} />
        <EnterScreen isAuth={isAuth} setIsAuth={setIsAuth} isOurStory />
        <CreateYourThinks/>
        <SectionWithImage/>
        <Footer/>
    </Stack>
}

export default OurStoryPage