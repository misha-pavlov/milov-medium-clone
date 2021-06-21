import React from 'react';
import {Stack, Image, useDisclosure} from '@chakra-ui/react';
import { BookOutlined } from '@ant-design/icons';

import { DefaultText, PostDateTime } from '../../config/fonts';
import HeaderPost from '../HeaderPost/HeaderPost';
import ModalLogin from "../ModalLogin/ModalLogin";

const RecentPostsItem = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return <Stack width={700} direction='row' justify='space-between' align='center' mb={40}>
        <Stack width={450}>
            <HeaderPost />
            <Stack>
                <DefaultText isBold>
                    How sex help you in live!
                </DefaultText>
            </Stack>
            <Stack direction='row' justify='space-between'>
                <PostDateTime>
                    Date • Time
                </PostDateTime>
                <Stack><BookOutlined style={{marginTop: 13, width: 13}} onClick={onOpen} /></Stack>
            </Stack>
        </Stack>

        <Stack>
            <Image
                objectFit="fill"
                src={'https://i.imgur.com/o0G0gN3.jpg'}
                alt="postImage"
                height={134}
                maxWidth={200}
            />
        </Stack>
        <ModalLogin isOpen={isOpen} onClose={onClose} isSignUp />
    </Stack>
}

export default RecentPostsItem