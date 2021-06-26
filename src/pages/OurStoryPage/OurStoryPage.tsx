import React from 'react';
import { Stack } from '@chakra-ui/react';

import Header from '../../components/Header/Header';
import EnterScreen from '../MediumMain/components/EnterScreen/EnterScreen';
import CreateYourThinks from './components/CreateYourThinks/CreateYourThinks';
import SectionWithImage from './components/SectionWithImage/SectionWithImage';
import Footer from '../../components/Footer/Footer';

const OurStoryPage = () => {
    return <Stack align='center'>
        <Header/>
        <EnterScreen isOurStory />
        <CreateYourThinks/>
        <SectionWithImage/>
        <Footer/>
    </Stack>
}

export default OurStoryPage