import React from 'react';
import { Stack, Image, Button, useDisclosure } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

import { headerStyles, Li } from './Header.styles';
import logo from '../../assets/icons/medium.svg'
import { constants } from '../../config/constants';
import { messages } from '../../config/messages';
import ModalLogin from '../ModalLogin/ModalLogin';
import SearchPosts from './components/SearchPosts';
import { TMediumMain } from '../../pages/MediumMain/MediumMain';

const Header:React.FC<TMediumMain> = ({ isAuth, removeLocalStorageItem, addLocalStorageItem }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenSearchMode, onOpen: onOpenSearchMode, onClose: onCloseSearchMode } = useDisclosure();

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

            <ModalLogin isOpen={isOpen} onClose={onClose} addLocalStorageItem={addLocalStorageItem} />
            <SearchPosts isOpen={isOpenSearchMode} onClose={onCloseSearchMode} />

            <Stack direction='row' justify='space-between' align='center' spacing={5}>
                <Li><NavLink to={constants.urls.ourStory}>{isAuth
                    ? messages.login.write : messages.nav.ourStory}</NavLink></Li>
                <Button colorScheme="teal" variant="ghost" borderRadius={50}
                        style={headerStyles.search} onClick={onOpenSearchMode}>
                    <Search2Icon/>
                </Button>
                <Button colorScheme={isAuth ? 'red' : 'teal'} variant="outline"
                        onClick={isAuth ? removeLocalStorageItem : onOpen}>
                    {isAuth ? messages.login.exit : messages.login.signIn}
                </Button>
            </Stack>
        </Stack>
    </Stack>
}

export default Header