import React from 'react';
import { Stack, Image } from '@chakra-ui/react';

import { getIcon } from './SignInWithButtons.helper'
import { messages } from '../../config/messages';
import { colors } from '../../config/colors';
import { LoginText } from './SignInWithButton.styles'

type TSingInWithButtons = {
    iconType: 'Apple' | 'email' | 'Facebook' | 'Google' | 'Twitter';
    isSignUp?: boolean;
}

const SingInWithButtons:React.FC<TSingInWithButtons> = ({ iconType, isSignUp }) => {
    return <Stack direction='row' justify='center' align='center' spacing={2} borderWidth={1} borderColor={colors.black1} borderRadius={50} padding={2} width={isSignUp ? 275 : 250}>
        <Image boxSize={4}
                objectFit="cover"
                src={getIcon(iconType)}
                alt="logo" />

        <div><LoginText>{`${isSignUp ? messages.login.signUpText : messages.login.signInText} ${iconType}`}</LoginText></div>
    </Stack>
};

export default SingInWithButtons