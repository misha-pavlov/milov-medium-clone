import React from 'react';
import { Stack } from '@chakra-ui/react';

import { DefaultText, TrendingNumber, PostDateTime } from '../../../../config/fonts';
import HeaderPost from '../../../../components/HeaderPost/HeaderPost';

type TTrendItem = {
    trendNumber?: string;
}

const TrendItem: React.FC<TTrendItem> = ({ trendNumber }) => {
    return <Stack direction='row' width={350} spacing={10}>
        <Stack>
            <TrendingNumber>
                {trendNumber ? trendNumber : '01'}
            </TrendingNumber>
        </Stack>

        <Stack>
            <HeaderPost />
            <Stack>
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