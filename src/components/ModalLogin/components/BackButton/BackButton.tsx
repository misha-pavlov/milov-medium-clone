import React from 'react';
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { colors } from '../../../../config/colors';
import { DefaultText } from '../../../../config/fonts';

type TBackButton = {
    onClick: () => void;
}

const BackButton:React.FC<TBackButton> = ({ onClick }) => {
    return <Button variant='ghost' bg={colors.gray1} onClick={onClick}
                   borderRadius={50} leftIcon={<ArrowBackIcon/>} align='center'>
        <DefaultText>Назад</DefaultText>
    </Button>
}

export default BackButton