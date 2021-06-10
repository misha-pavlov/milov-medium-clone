import React from 'react';
import { Stack } from '@chakra-ui/react';
import { FundOutlined } from '@ant-design/icons';

import { DefaultText } from '../../../../config/fonts';
import { messages } from '../../../../config/messages';
import TrendItem from './TrendItem';

const Trending = () => {
    return <Stack width={1200}>
            <Stack direction='row' align='center' mt={70} mb={5}>
                <FundOutlined />
                <DefaultText>
                    {messages.trending}
                </DefaultText>
            </Stack>

            <Stack direction='row' align='center' justify='space-between'>
                <TrendItem/>
                <TrendItem trendNumber='02' />
                <TrendItem trendNumber='03' />
            </Stack>

            <Stack direction='row' align='center' justify='space-between'>
                <TrendItem trendNumber='04' />
                <TrendItem trendNumber='05' />
                <TrendItem trendNumber='06' />
            </Stack>
        </Stack>
}

export default Trending