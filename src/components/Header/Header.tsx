import React from 'react';
import { Stack, Image } from '@chakra-ui/react';

import { HeaderBlock } from './Header.styles';
import logo from '../../assets/icons/medium.svg'

const Header = () => {
    return <Stack justify='center' align='center'>
        <Stack direction='row' justify='space-between' width={1200}>
            <Stack>
                <Image
                    boxSize={10}
                    objectFit="cover"
                    src={logo}
                    alt="logo"
                />
            </Stack>

            <Stack direction='row' justify='space-between' align='center'>
                <div>ff</div>
                <div>ff</div>
                <div>ff</div>
            </Stack>
        </Stack>
    </Stack>
}

export default Header