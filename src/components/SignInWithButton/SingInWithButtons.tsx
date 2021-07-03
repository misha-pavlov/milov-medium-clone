import React from 'react';
import { Image, Button } from '@chakra-ui/react';

import { getIcon } from './SignInWithButtons.helper'
import { messages } from '../../config/messages';
import { colors } from '../../config/colors';
import { LoginText } from './SignInWithButton.styles'
import { constants } from '../../config/constants';

type TSingInWithButtons = {
    iconType: 'userName' | 'Facebook' | 'Google';
    isSignUp?: boolean;
    disabled?: boolean;

    onClick?: () => void;
}

const SingInWithButtons:React.FC<TSingInWithButtons> = ({
    iconType,
    isSignUp,
    disabled ,
    onClick
}) => {
    return <Button direction='row' justify='center' align='center' spacing={2} borderWidth={1}
                   borderColor={colors.black1} bg={colors.white2} borderRadius={50}
                   padding={2} width={350} disabled={disabled} onClick={onClick}
                   _hover={{ bg: colors.specialGreen, borderColor: colors.specialGreen, }}>
        <Image boxSize={4}
               objectFit="cover"
               src={getIcon(iconType)}
               alt="logo" />

        <div><LoginText>{`${isSignUp ? messages.login.signUpText : messages.login.signInText} 
            ${iconType === constants.signIn.userName ? messages.login.userName : iconType}`}</LoginText></div>
    </Button>
};

export default SingInWithButtons