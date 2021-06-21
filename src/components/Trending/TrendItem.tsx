import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { DefaultText, TrendingNumber, PostDateTime } from '../../config/fonts';
import HeaderPost from '../HeaderPost/HeaderPost';
import {constants} from "../../config/constants";

type TTrendItem = {
    trendNumber?: string;
}

const TrendItem: React.FC<TTrendItem> = ({ trendNumber }) => {
    const history = useHistory();

    const goToPost = () => {
        history.push(constants.urls.post);
    }

    return <Stack direction='row' width={350} spacing={10}>
        <Stack>
            <TrendingNumber>
                {trendNumber ? trendNumber : '01'}
            </TrendingNumber>
        </Stack>

        <Stack>
            <HeaderPost />
            <Stack onClick={goToPost}>
                <DefaultText isBold>
                    Post Name
                </DefaultText>
            </Stack>
            <Stack>
                <PostDateTime>
                    Date • Time
                </PostDateTime>
            </Stack>
        </Stack>
    </Stack> 
}

export default TrendItem