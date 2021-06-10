import React from 'react';
import { Stack, Image, Button, useDisclosure } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom'

import { Li } from './Header.styles';
import logo from '../../assets/icons/medium.svg'
import { constants } from '../../config/constants';
import { messages } from '../../config/messages';
import ModalLogin from '../ModalLogin/ModalLogin';

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return <Stack justify='center' align='center'>
        <Stack direction='row' justify='space-between' width={1200} paddingTop={8} paddingBottom={8}>
            <NavLink to={constants.urls.medium}>
                <Image
                    boxSize={10}
                    objectFit="cover"
                    src={logo}
                    alt="logo"
                />
            </NavLink>

            <ModalLogin isOpen={isOpen} onClose={onClose} />

            <Stack direction='row' justify='space-between' align='center' spacing={5}>
                <Li><NavLink to={constants.urls.ourStory}>{messages.nav.ourStory}</NavLink></Li>
                <Button colorScheme="teal" variant="outline" onClick={onOpen}>
                    {messages.login.signIn}
                </Button>
            </Stack>
        </Stack>
    </Stack>
}

export default Header