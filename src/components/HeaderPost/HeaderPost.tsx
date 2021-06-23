import React from 'react';
import { Stack, useDisclosure } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
import { BookOutlined, GithubOutlined, InstagramOutlined,
    LinkedinOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';

import { PostCreator } from '../../config/fonts';
import { stylesPostPage } from './HeaderPost.styles';
import ModalLogin from '../ModalLogin/ModalLogin';
import FollowButton from '../FollowButton/FollowButton';

type THeaderPost = {
    isPostPage?: boolean;
}

const HeaderPost:React.FC<THeaderPost> = ({ isPostPage }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return <Stack direction='row' align='center' mb={2}>
        <Stack>
            <QuestionIcon boxSize={isPostPage ? 35 : 5} />
        </Stack>
        {isPostPage
            ? <Stack direction='row' align='center' justify='space-between' width={900}>
            <Stack direction='row' align='center'>
                <PostCreator isPostPage={isPostPage}>
                    Name user
                </PostCreator>
                <FollowButton onClick={onOpen} />
            </Stack>

            <Stack direction='row' align='center' spacing={5}>
                <TwitterOutlined style={stylesPostPage.icons} />
                <GithubOutlined style={stylesPostPage.icons} />
                <LinkedinOutlined style={stylesPostPage.icons} />
                <FacebookOutlined style={stylesPostPage.icons} />
                <InstagramOutlined style={stylesPostPage.icons} />
                <BookOutlined style={stylesPostPage.icons} onClick={onOpen} />
            </Stack>
        </Stack>
            : <Stack direction='row' align='center'>
            <PostCreator isPostPage={isPostPage}>
                Name user
            </PostCreator>
        </Stack>}
        <ModalLogin isOpen={isOpen} onClose={onClose} isSignUp />
    </Stack>
}

export default HeaderPost