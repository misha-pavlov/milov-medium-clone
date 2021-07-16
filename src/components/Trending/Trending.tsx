import React from 'react';
import { Stack } from '@chakra-ui/react';
import { FundOutlined } from '@ant-design/icons';

import { DefaultText } from '../../config/fonts';
import { messages } from '../../config/messages';
import TrendItem from './TrendItem';
import { TRecentPosts } from '../RecentPosts/RecentPosts';

const Trending: React.FC<TRecentPosts> = ({ posts }) => {
  return (
    <Stack width={1200}>
      <Stack direction="row" align="center" mt={70} mb={5}>
        <FundOutlined />
        <DefaultText>{messages.trending}</DefaultText>
      </Stack>

      <Stack direction="row" align="center" justify="space-between">
        {posts.length > 3 && (
          <>
            <TrendItem
              _id={posts[0]._id}
              user={posts[0].postCreator}
              name={posts[0].name}
              date={posts[0].date}
              timeToRead={posts[0].timeToRead}
            />
            <TrendItem
              _id={posts[1]._id}
              user={posts[1].postCreator}
              name={posts[1].name}
              date={posts[1].date}
              timeToRead={posts[1].timeToRead}
              trendNumber="02"
            />
            <TrendItem
              _id={posts[2]._id}
              user={posts[2].postCreator}
              name={posts[2].name}
              date={posts[2].date}
              timeToRead={posts[2].timeToRead}
              trendNumber="03"
            />
          </>
        )}
      </Stack>

      <Stack direction="row" align="center" justify="space-between">
        {posts.length > 6 && (
          <>
            <TrendItem
              _id={posts[3]._id}
              user={posts[3].postCreator}
              name={posts[3].name}
              date={posts[3].date}
              timeToRead={posts[3].timeToRead}
              trendNumber="04"
            />
            <TrendItem
              _id={posts[4]._id}
              user={posts[4].postCreator}
              name={posts[4].name}
              date={posts[4].date}
              timeToRead={posts[4].timeToRead}
              trendNumber="05"
            />
            <TrendItem
              _id={posts[5]._id}
              user={posts[5].postCreator}
              name={posts[5].name}
              date={posts[5].date}
              timeToRead={posts[5].timeToRead}
              trendNumber="06"
            />
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Trending;
