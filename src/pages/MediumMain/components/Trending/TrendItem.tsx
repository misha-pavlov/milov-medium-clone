import React from 'react';
import { Stack, Image } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

import { PostCreator, DefaultText, TrendingNumber, PostDateTime } from '../../../../config/fonts';

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
            <Stack direction='row' align='center' mb={2}>
                <Stack>
                    <QuestionIcon boxSize={5} />
                </Stack>

                <PostCreator>
                    Name user
                </PostCreator>
            </Stack>
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