import React from 'react';
import {Image, Stack} from '@chakra-ui/react';

import Header from '../../components/Header/Header';
import HeaderPost from '../../components/HeaderPost/HeaderPost';
import TrendingContainer from '../../components/Trending/TrendingContainer';
import Footer from '../../components/Footer/Footer';
import { PostHeader } from './PostPage.styles';
import { TMediumMain } from '../MediumMain/MediumMain';

const PostPage:React.FC<TMediumMain> = ({ isAuth, setIsAuth,
                                            removeLocalStorageItem, addLocalStorageItem }) => {
    return <Stack>
        <Header addLocalStorageItem={addLocalStorageItem} removeLocalStorageItem={removeLocalStorageItem} isAuth={isAuth} setIsAuth={setIsAuth} />
        <Stack align='center'>
            <Stack width={900}>
                <PostHeader>How sex help you in life!</PostHeader>

                <Stack mb={50}>
                    <HeaderPost isPostPage />
                </Stack>

                <Stack mb={50}>
                    <Image
                        objectFit="fill"
                        src={'https://i.imgur.com/o0G0gN3.jpg'}
                        alt="postImage"
                        maxWidth={900}
                        maxHeight={1000}
                    />
                </Stack>

                <Stack mb={50}>
                    <p>Text in this section</p>
                </Stack>
            </Stack>

            <Stack>
                <TrendingContainer/>
            </Stack>

            <Stack>
                <Footer/>
            </Stack>
        </Stack>
    </Stack>
}

export default PostPage